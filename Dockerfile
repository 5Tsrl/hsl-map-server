FROM node:6-stretch

ENV \
  # MAT_OTP_URL="swarm.5t.torino.it:8070/otp/routers/mato/index/graphql" \
  MAT_OTP_URL="approxymato:8080/otp/routers/mato/index/graphql" \
  MAT_OTP_STOP_URL="approxymato:8080/otp/routers/mato/index/graphql" \
  # TILES_LAST_MODIFIED definito anche sullo stack portainer di swarm, che ha precedenza
  TILES_LAST_MODIFIED="Wed, 09 Sep 2020 11:22:00 GMT" \
  WORK="/hsl-map-server"


RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y git unzip pngquant libgl1-mesa-glx libgl1-mesa-dri xserver-xorg-video-dummy libgles2-mesa libstdc++6

WORKDIR ${WORK}

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8080

CMD ./run.sh

# TEST
# docker build -t registry:5000/map-server:test . ;      docker push  registry:5000/map-server:test
# PRODUZIONE
# docker build -t registry:5000/map-server . ;      docker push  registry:5000/map-server
