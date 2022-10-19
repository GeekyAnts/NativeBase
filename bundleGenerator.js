const { rollup } = require('rollup');
// const path = require('path');
const fs = require('fs');
const typescript = require('@rollup/plugin-typescript');

const commonjs = require('@rollup/plugin-commonjs');
const path = require('path');
// const externalGlobals = require('rollup-plugin-external-globals');

const inputOptions = {
  input: path.join(__dirname, 'src/utils/static/index.ts'),
  plugins: [typescript({ tsconfig: false }), commonjs()],
};
const outputOptions = { file: 'dist.js', format: 'cjs' };

build();
async function build() {
  const bundle = await rollup(inputOptions);
  const { output } = await bundle.generate(outputOptions);

  const outputCodes = [];
  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === 'asset') {
      // console.log('Asset', chunkOrAsset);
    } else {
      // console.log("generated chunk code:: \n", chunkOrAsset.code);
      outputCodes.push(chunkOrAsset.code);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'src/bundle.js'), outputCodes[0]);
  const newBundle = require(path.join(__dirname, 'src/bundle.js'));
  const { generateBuildTimeMap, defaultTheme, convertStyledProps } = newBundle;
  const usedComponentDetailMap = {
    Button: [
      { variant: 'unstyled' },
      { colorScheme: 'indigo' },
      { colorScheme: 'indigo' },
      { variant: 'unstyled' },
      { colorScheme: 'indigo' },
      { colorScheme: 'indigo' },
    ],
  };
  const resolvedProps = convertStyledProps({
    theme: defaultTheme,
    styledSystemProps: { p: 4, m: 4, bg: 'red.500' },
  });
  generateBuildTimeMap('web', usedComponentDetailMap);
  // console.log(outputCodes, 'eeee');
  return outputCodes;
}
