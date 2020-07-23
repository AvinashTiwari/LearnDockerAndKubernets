docker network ls

docker network inspect bridge

docker network create my_app_net1

docker container run -d --name new_ngnixss --network my_app_net1 nginx