module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.mzm.estream_encrypt_release",
        "linux": {
          "maintainer": "Zeyad Obaia",
          "executableName": "Estream-Encrypt",
          "category": "Utility",
          "desktop": "Estream-Encrypt",
          "target" : "deb", 
        },
        "asarUnpack": [
          "**/exe/*"
        ],
        publish: ['github']
      }
    }
  }
}
