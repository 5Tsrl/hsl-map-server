#!/bin/bash

curl http://sudocker:8080/styles/mato/style.json -o ./style.json && \
rm -f /tmp/.X10-lock && \
Xorg -dpi 96 -nolisten tcp -noreset +extension GLX +extension RANDR +extension RENDER -logfile ./10.log -config ./xorg.conf :10 & \
sleep 5 && \
DISPLAY=":10" node \
node_modules/tessera/bin/tessera.js --port 8080 --config config.js --multiprocess \
-r ${WORK}/node_modules/tilelive-otp-citybikes/ \
-r ${WORK}/node_modules/tilelive-otp-stops/ \
-r ${WORK}/node_modules/tilelive-gl/ 
# -r ${WORK}/node_modules/tilelive-hsl-parkandride \
# -r ${WORK}/node_modules/tilelive-hsl-ticket-sales \
# -r ${WORK}/node_modules/tilelive-otp-routes/ \

