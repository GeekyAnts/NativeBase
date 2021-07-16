export function countDecimals(value?: Number) {
  if (value && value != 0) {
    if (Math.floor(value.valueOf()) === value.valueOf()) return 0;
    return value.toString().split('.')[1].length || 0;
  }
  return 0;
}

export function numberOfDecimals(value?: Number, step?: Number) {
  if (value && step) {
    return countDecimals(value) > countDecimals(step)
      ? countDecimals(value)
      : countDecimals(step);
  } else if (!value && step) {
    return countDecimals(step);
  } else if (value && !step) {
    return countDecimals(value);
  } else {
    return 0;
  }
}
