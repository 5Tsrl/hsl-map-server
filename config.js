module.exports = {
  "/turin-vector-map": {
    //"source": "mbtiles://./turin_italy.mbtiles",
    //"source": "mbtiles:///var/mbtiles/provto.mbtiles",
    "source": "mbtiles:///data/mbtiles/tiles.mbtiles",
    "headers": {
      "Cache-Control": "public,max-age=86400"
    },
  },
  "/turin-map": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("/data/mapstyles/style.json"),
    },
    "headers": {
      "Cache-Control": "public,max-age=604800",    //7gg
      "Last-Modified":`${process.env.TILES_LAST_MODIFIED}`, //es Wed, 22 Mar 2017 11:07:00 GMT
    }
  },
  "/turin-map-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("/data/mapstyles/style.json"),
    },
    "headers": {
      "Cache-Control": "public,max-age=604800",    //7gg
      "Last-Modified":`${process.env.TILES_LAST_MODIFIED}`, //es Wed, 22 Mar 2017 11:07:00 GMT
      "X-pippo":"pluto"
    }
  },
  "/turin-bikerental-map": {
    "source": `otpcitybikes://${process.env.MAT_OTP_URL}`,
    //"source": `otpcitybikes://172.21.6.33:8080/otp/routers/mat/index/graphql`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },/*
  "/hsl-citybike-map": {
    "source": `otpcitybikes://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=172800"
    }
  },*/
  "/turin-stop-map": {
    //"source": `otpstops://172.21.6.33:8080/otp/routers/mat/index/graphql`,
    "source": `otpstops://${process.env.MAT_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  /*
  "/hsl-stop-map": {
    "source": `otpstops://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/hsl-route-map": {
    "source": `otproutes://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/finland-stop-map": {
    "source": `otpstops://${process.env.FINLAND_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/waltti-stop-map": {
    "source": `otpstops://${process.env.WALTTI_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/hsl-parkandride-map": {
    "source": "hslparkandride://",
    "headers": {
      "Cache-Control": "public,max-age=172800"
    }
  },
  "/hsl-ticket-sales-map": {
    "source": "hslticketsales://",
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  }
  */
}
