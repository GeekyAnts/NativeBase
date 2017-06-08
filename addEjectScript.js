const printMessage = require("print-message");

printMessage(
  [
    "NativeBase 2.0 has been succesfully installed!",
    "Run `node node_modules/native-base/ejectTheme.js` to copy over theme config and variables.",
    "Head over to the docs for detailed information on how to make changes to the theme."
  ],
  {
    color: "yellow",
    borderColor: "green"
  }
);
