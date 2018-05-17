
Build from local source.

    cd ./onlyoffice-front
    docker build -f docker/Dockerfile -t onlyoffice-front .

Run from local image

    docker run \
        -e DOCSERVER_URL=$DOCSERVER_URL \
        -e FRONTEND_PORT=$FRONTEND_PORT \
        -e NODE_ENV=$NODE_ENV \
        -p 3004:3004 \
        onlyoffice-front
  
Launch using the IP:

     HOST_IP=`ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p' | tail -n 1`
     http://HOST_IP:3004/
  
Debug:

    docker exec -i -t `docker ps --filter "ancestor=onlyoffice-front" --format "{{.Names}}"` /bin/bash     