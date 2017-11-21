cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-fonts.fonts",
    "file": "plugins/cordova-plugin-fonts/www/fonts.js",
    "pluginId": "cordova-plugin-fonts",
    "clobbers": [
      "navigator.Fonts"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-fonts": "0.6.5"
};
// BOTTOM OF METADATA
});