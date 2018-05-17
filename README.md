Running 
========

Run on ONLYOFFICE Document Server. 

        sudo docker run -i -t -d -p 9004:80 onlyoffice/documentserver

Build from frontend image.

    cd ./onlyoffice-front
    docker build -f docker/Dockerfile -t onlyoffice-front .
    
Set env:

    export HOST_IP=`ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p' | tail -n 1`
    export DOCSERVER_URL=http://${HOST_IP}:9004/
    export FRONTEND_PORT=3004
    export NODE_ENV=development    

Run front end.

    docker run \
        -e DOCSERVER_URL=$DOCSERVER_URL \
        -e FRONTEND_PORT=$FRONTEND_PORT \
        -e NODE_ENV=$NODE_ENV \
        -p 3004:3004 \
        onlyoffice-front
  
Launch using the IP:

     HOST_IP=`ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p' | tail -n 1`
     http://HOST_IP:3004/
     
Important
---------

In this demo, the doc server needs to have http access to frontend service through 3004     