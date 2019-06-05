const keys = require('./keys')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors)
app.use(bodyParser.json())

const {Pool} = require('pg')

const pgClient = new Pool({
user: keys.pgUSER,
host: keys.pgHOST,
database: keys.pgDatabase,
port: keys.pgPort,
password: keys.pgPassword
});

pgClient.on('error', () => console.log('Connection error occured'));

pgClient.query('CREATE TABLE IF NOT EXISTS values(NUMBER int)')
.catch(err => console.log(err));

const redis = require('redis')
const redisClient = redis.createClient({
    host: keys.redisHOST,
    port: keys.redisPORT,
    retry_strategy: () =>1000
});

const redishPublisher = redisClient.duplicate();

app.get('/', (req,res) => {
    res.send('Hi');
});


app.get('values/all', async(req,res) => {
    const values = await pgClient.query('Select * from values');
    res.send(values.row)
});


app.get('values/current', async(req,res) => {
     redisClient.hgetall('values',(err,values) => {
        res.send(values);
     });
});

app.post('/values', async(req,res) => {
    const index = req.body.index;
    if(parseInt(index) > 40){
        return res.status(442).send('value to high');
    }

    redisClient.hset('values', index,"Nothing Yet");
    redishPublisher.publish('index', index);
    pgClient.query('INSERT INTO VALUES(number) value($1)', [index]);
    res.send({working: true});
});

app.listen(5000,err=>{
    console.log("listening");
})