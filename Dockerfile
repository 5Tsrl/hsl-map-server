FROM registry:5000/mapservbase
MAINTAINER 5T version: 0.4

ENV \
  MAT_OTP_URL='172.21.6.33:8080/otp/routers/mat/index/graphql' \
  WORK='/opt/hsl-map-server' \
  TILES_LAST_MODIFIED='Wed, 22 Mar 2017 11:07:00 GMT'

WORKDIR ${WORK}

ADD . ${WORK}
RUN npm install

#RUN curl https://osm2vectortiles-downloads.os.zhdk.cloud.switch.ch/v2.0/extracts/turin_italy.mbtiles > turin_italy.mbtiles

EXPOSE 8080

RUN chmod -R 777 ${WORK}

RUN mkdir /.forever && chmod -R 777 /.forever
USER 9999

CMD \
  # cd ${WORK}/node_modules/hsl-map-style && \
  # unzip -P ${FONTSTACK_PASSWORD} fontstack.zip && \
  # unzip  fontstack.zip && \
  # -r ${WORK}/node_modules/tilelive-hsl-parkandride \
  # -r ${WORK}/node_modules/tilelive-hsl-ticket-sales \
  cd ${WORK} && \
  rm -f /tmp/.X10-lock && \
  Xorg -dpi 96 -nolisten tcp -noreset +extension GLX +extension RANDR +extension RENDER -logfile ./10.log -config ./xorg.conf :10 & \
  sleep 15 && \
  DISPLAY=":10" node_modules/.bin/forever start -c "node --harmony" \
  node_modules/tessera/bin/tessera.js --port 8080 --config config.js \
  -r ${WORK}/node_modules/tilelive-otp-citybikes/ \
  -r ${WORK}/node_modules/tilelive-otp-stops/ \
  -r ${WORK}/node_modules/tilelive-otp-routes/ \
  -r ${WORK}/node_modules/tilelive-gl/ \
  && sleep 10 && node_modules/.bin/forever --fifo logs 0
