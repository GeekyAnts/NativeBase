export const getUnit = (str: string) => {
  var units: string = '';

  // Percentage
  if (str.endsWith('%')) {
    units = '%';
    return units;
  }

  // Absolute Units
  if (str.endsWith('px')) {
    units = 'px';
    return units;
  }
  if (str.endsWith('cm')) {
    units = 'cm';
    return units;
  }
  if (str.endsWith('mm')) {
    units = 'mm';
    return units;
  }
  if (str.endsWith('Q')) {
    units = 'Q';
    return units;
  }
  if (str.endsWith('in')) {
    units = 'in';
    return units;
  }
  if (str.endsWith('pc')) {
    units = 'pc';
    return units;
  }
  if (str.endsWith('pt')) {
    units = 'pt';
    return units;
  }

  // Relative Units
  if (str.endsWith('em')) {
    units = 'em';
    return units;
  }
  if (str.endsWith('ex')) {
    units = 'ex';
    return units;
  }
  if (str.endsWith('ch')) {
    units = 'ch';
    return units;
  }
  if (str.endsWith('rem')) {
    units = 'rem';
    return units;
  }
  if (str.endsWith('lh')) {
    units = 'lh';
    return units;
  }
  if (str.endsWith('vw')) {
    units = 'vw';
    return units;
  }
  if (str.endsWith('vh')) {
    units = 'vh';
    return units;
  }
  if (str.endsWith('vmin')) {
    units = 'vmin';
    return units;
  }
  if (str.endsWith('vmax')) {
    units = 'vmax';
    return units;
  }
  return 'px';
};
