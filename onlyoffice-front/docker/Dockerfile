FROM node:8-slim

ENV BASE_DIR /app
ENV TEMP_DIR $BASE_DIR/temp/

RUN mkdir -p $BASE_DIR $TEMP_DIR

RUN apt-get update \
    && apt-get install -y --fix-missing curl \
                          git \
                          bzip2 \
                          ssh \
                          build-essential

COPY ["docker/docker-entrypoint.sh",  "/"]
COPY ["./", "$BASE_DIR"]

RUN chmod +x /docker-entrypoint.sh

WORKDIR $BASE_DIR

RUN npm install

ENTRYPOINT ["/docker-entrypoint.sh"]

