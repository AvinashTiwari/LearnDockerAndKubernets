docker container run -d -p 3307:3306 --name db1 -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
#827d745a6330b4661286b15681e3e4ca8c634e630c1999302e21a4f4b2bf6d46

docker container logs  db1

docker container run -d  --name webserver -p 8080:80 httpd
#b013b8338ef726e967f292688c682e7ac818b5e4eaef4a27b7c106d3e41c1e04

docker ps
