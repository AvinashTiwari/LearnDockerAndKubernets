docker container ls

docker container run -it --name proxys  nginx bash

docker container ls -a

docker container start -ai proxys

docker container exec -it proxys bash
