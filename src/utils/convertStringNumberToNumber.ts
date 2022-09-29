// For backward compatibility with 3.0 of props like non token string numbers `<Box mt={"39"} />` => used to get applied as 39px. RN expects fontWeight to be string and crashes with numbers
// https://reactnative.dev/docs/text-style-props#fontweight
export const convertStringNumberToNumber = (key: string, value: string) => {
  if (
    typeof value === 'string' &&
    key !== 'fontWeight' &&
    value &&
    !isNaN(Number(value))
  ) {
    return parseFloat(value);
  }

  return value;
};
