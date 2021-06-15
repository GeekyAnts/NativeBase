const { exec } = require('child_process');
const path = require('path');
const themeFile = path.join(__dirname, 'src', 'theme', 'index.ts');
const outDirectory = path.join(__dirname, 'theme');

const transpileScript = `tsc ${themeFile} --target esnext --moduleResolution node --outDir ${outDirectory} --skipLibCheck true --allowSyntheticDefaultImports true`;

const VALID_ARGS = ['eject:theme'];

const ejectTheme = async () => {
  await promisifyExec(transpileScript);
  const moveToDirectory = `mv ${outDirectory} ${process.cwd()}`;
  await promisifyExec(moveToDirectory);

  console.log('Theme ejected successfully!');
  console.log('Theme folder is placed in ' + process.cwd() + ' directory.');
};

const main = () => {
  const myArgs = process.argv.slice(2);
  invokeFunctionBasedOnArgs(myArgs[0]);
};

const invokeFunctionBasedOnArgs = (arg) => {
  switch (arg) {
    case VALID_ARGS[0]: {
      ejectTheme();
      break;
    }
    default: {
      console.log('No arguments matched. Valid arguments are ', VALID_ARGS);
      break;
    }
  }
};

const promisifyExec = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        reject(error);
        console.log(`exec error: ${error}`);
      }
      resolve();
    });
  });
};

main();
