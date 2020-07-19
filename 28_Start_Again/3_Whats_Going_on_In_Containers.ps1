docker container run -d --name nginx nginx
#09ae6c29c49f07863ff40710c563ca0b559e5f6b8e6bb93f18e02b33baac2e4c
docker container run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql
#43f033bc64c12a7d123728c63b4fbb772ef0b0df5af729a790a0854710af55f3
docker container ls

docker container top mysql
docker container top nginx

docker container inspect mysql

docker container stats --help

docker container stats

docker container ls

