/* eslint-disable */
//@ts-nocheck
// This functions is taken from react native web

const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const cache: any = {};

function toHyphenLower(match: any) {
  return '-' + match.toLowerCase();
}

function hyphenateStyleName(name: string): string {
  if (name in cache) {
    return cache[name];
  }

  const hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName);
}

export default hyphenateStyleName;
