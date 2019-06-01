const keys = require('./keys')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors)
app.use(bodyParser.json())

const {pool} = require('pg')

const pgClient = new pool({
user: keys.pgUSER,
host: keys.pgHOST,
database: keys.pgDatabase,
port: keys.pgPort,
password: keys.pgPassword
});

pgClient.on('error', () => console.log('Connection error occured'));

pgClient.query('CREATE TABLE IF NOT EXISTS values(NUMBER int)')
.catch(err => console.log(err));