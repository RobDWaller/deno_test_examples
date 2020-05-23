FROM ubuntu:18.04

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y curl vim zip unzip git

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"