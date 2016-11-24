module.exports = {
  "/turin-vector-map": {
    "source": "mbtiles://./turin_italy.mbtiles",
    "headers": {
      "Cache-Control": "public,max-age=86400"
    }
  },
  "/turin-map": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("hsl-map-style")
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/turin-map-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("hsl-map-style")
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/turin-bikerental-map": {
    "source": `otpcitybikes://172.21.6.33:8080/otp/routers/mat/index/graphql`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },/*
  "/hsl-citybike-map": {
    "source": `otpcitybikes://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },*/
  "/turin-stop-map": {
    "source": `otpstops://172.21.6.33:8080/otp/routers/mat/index/graphql`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  /*
  "/hsl-stop-map": {
    "source": `otpstops://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/hsl-route-map": {
    "source": `otproutes://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/finland-stop-map": {
    "source": `otpstops://${process.env.FINLAND_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/waltti-stop-map": {
    "source": `otpstops://${process.env.WALTTI_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/hsl-parkandride-map": {
    "source": "hslparkandride://",
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/hsl-ticket-sales-map": {
    "source": "hslticketsales://",
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  }
  */
}
