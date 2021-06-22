const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? copyDir(srcPath, destPath)
      : fs.copyFileSync(srcPath, destPath);
  }
}

const themeFolder = path.join(__dirname, 'src', 'theme');
const outDirectory = path.join(process.cwd(), 'theme');
const themeTemp = path.join(process.cwd(), 'theme-temp');

const transpileScript = `tsc ${themeTemp}/index.ts --target esnext --moduleResolution node --outDir ${outDirectory} --skipLibCheck true --allowSyntheticDefaultImports true`;

const VALID_ARGS = ['eject:theme'];

const ejectTheme = async () => {
  await copyDir(themeFolder, themeTemp);
  await promisifyExec(transpileScript);
  fs.rmSync(themeTemp, { recursive: true, force: true });

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
