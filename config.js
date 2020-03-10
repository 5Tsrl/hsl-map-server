module.exports = {
  "/turin-vector-map": {
    "source": "mbtiles:///data/mbtiles/tiles.mbtiles",
    "headers": {
      "Cache-Control": "public,max-age=86400"
    },
  },
  "/turin-map": {
    "source": {
      "protocol": "gl:",
      "query": {},
      //"style": require("./style.json"),
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
      // "style": require("http://sudocker:8080/data/mapstyles/style.json"), NON FUNGE
      // "style": require("./style.json"),
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
      "Cache-Control": "public,max-age=30"
    }
  },
  "/turin-stop-map": {
    //"source": `otpstops://172.21.6.33:8080/otp/routers/mat/index/graphql`,
    "source": `otpstops://${process.env.MAT_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  /* **********************************  HSL ***************************************** */
  /*
  "/map/v1/hsl-vector-map": {
    "source": "mbtiles://./finland.mbtiles",
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/map/v1/hsl-map": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { icons: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-sv": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { text_sv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-sv-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { icons: { enabled: true }, text_sv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-fi-sv": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { text_fisv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-fi-sv-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { icons: { enabled: true }, text_fisv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-citybike-map": {
    "source": `otpcitybikes://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/waltti-citybike-map": {
    "source": `otpcitybikes://${process.env.WALTTI_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/hsl-stop-map": {
    "source": `otpstops://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/hsl-route-map": {
    "source": `otproutes://${process.env.HSL_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/finland-stop-map": {
    "source": `otpstops://${process.env.FINLAND_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/waltti-stop-map": {
    "source": `otpstops://${process.env.WALTTI_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/hsl-parkandride-map": {
    "source": "hslparkandride://",
    "headers": {
      "Cache-Control": "public,max-age=172800"
    }
  },
  "/map/v1/hsl-ticket-sales-map": {
    "source": "hslticketsales://",
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  }*/
}
