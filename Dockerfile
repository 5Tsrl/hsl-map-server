FROM node:6-stretch
MAINTAINER Reittiopas version: 0.1

ENV \
  MAT_OTP_URL="172.21.6.33:8080/otp/routers/mat/index/graphql" \
  TILES_LAST_MODIFIED="Wed, 22 Mar 2017 11:07:00 GMT" \
  FONTSTACK_PASSWORD="" \
  HSL_OTP_URL="api.digitransit.fi/routing/v1/routers/hsl/index/graphql" \
  WORK="/opt/hsl-map-server" \
  NODE_OPTS=""

RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y git unzip pngquant libgl1-mesa-glx libgl1-mesa-dri xserver-xorg-video-dummy libgles2-mesa libstdc++6

#5t RUN mkdir -p ${WORK}
WORKDIR ${WORK}

COPY yarn.lock ${WORK}
COPY package.json ${WORK}
RUN yarn install

COPY . ${WORK}

#TODO: Replace when https://github.com/osm2vectortiles/osm2vectortiles/issues/114 is fixed
#RUN curl http://koti.kapsi.fi/~hannes/tiles.v7.mbtiles > finland.mbtiles
#RUN curl https://osm2vectortiles-downloads.os.zhdk.cloud.switch.ch/v2.0/extracts/finland.mbtiles > finland.mbtiles
#5t RUN curl https://hsltiles.blob.core.windows.net/tiles/tiles.mbtiles > finland.mbtiles

EXPOSE 8080

# 5t RUN chmod -R 777 ${WORK}

RUN mkdir /.forever && chmod -R 777 /.forever
#USER 9999

ADD run.sh /usr/local/bin/


CMD /usr/local/bin/run.sh
