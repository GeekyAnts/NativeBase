var fs = require('fs');
var util = require('util');
var path = require('path');

var printMessage = require('print-message');

fs.copy = function (src, dst, cb) {
  console.warn('[Deprecated] See https://github.com/coolaj86/utile-fs');
  function copy(err) {
    var is
      , os
      ;

    if (!err) {
      return cb(new Error("File " + dst + " exists."));
    }

    fs.stat(src, function (err) {
      if (err) {
        return cb(err);
      }
      is = fs.createReadStream(src);
      os = fs.createWriteStream(dst);
      util.pump(is, os, cb);
    });
  }

  fs.stat(dst, copy);
};


var projectPackage = require(path.join(__dirname, 'package.json'));
if(!projectPackage.scripts) {
  projectPackage.scripts = {};
}

projectPackage.scripts['eject-native-base'] = 'node node_modules/native-base/ejectTheme.js';

try {
  fs.writeFileSync(path.join(__dirname, '..', '..', 'package.json'), JSON.stringify(projectPackage, null, 2));
  printMessage([
    'NativeBase 2.0 has been succesfully installed!',
    'Run `node node_modules/native-base/ejectTheme.js` to copy over theme config and variables.',
    'Head over to the docs for detailed information on how to make changes to the theme.',
  ], {
    color: 'yellow',
    borderColor: 'green',
  });
} catch(err) {
  console.log('Error: ' + err);
  console.log('There was some error adding the eject script to your package.json. \nRefer http://docs.nativebase.io/docs/customize/SetUp.html for theming')
}
