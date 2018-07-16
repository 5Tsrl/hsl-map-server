FROM node:6-stretch

ENV \
  MAT_OTP_URL="172.21.6.33:8080/otp/routers/mat/index/graphql" \
  TILES_LAST_MODIFIED="Wed, 22 Mar 2017 11:07:00 GMT" \
  WORK="/hsl-map-server"

RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y git unzip pngquant libgl1-mesa-glx libgl1-mesa-dri xserver-xorg-video-dummy libgles2-mesa libstdc++6

WORKDIR ${WORK}

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8080

CMD ./run.sh
