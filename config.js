module.exports = {
  "/turin-vector-map": {
    //"source": "mbtiles://./turin_italy.mbtiles",
    "source": "mbtiles:///var/mbtiles/provto.mbtiles",
    "headers": {
      "Cache-Control": "public,max-age=86400"
    },
  },
  "/turin-map": {
    "source": {
      "protocol": "gl:",
      "query": {},
      //"style": require("hsl-map-style/hsl-gl-map-v9-no-icons.json")
      //"style": require("/var/mapstyles/5t-gl-map.json"),
      "style": require("/var/mapstyles/styleMOD.json"),
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/turin-map-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      //"style": require("hsl-map-style")
      "style": require("/var/mapstyles/styleMOD.json"),
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
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
