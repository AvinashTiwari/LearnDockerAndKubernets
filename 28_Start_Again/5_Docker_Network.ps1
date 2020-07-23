docker network ls

docker network inspect bridge

docker network create my_app_net2

docker container run -d --name new_ngnixssxs --network my_app_net2 nginx