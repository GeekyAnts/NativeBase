import { themeTools } from '../../theme';
import type { SafeAreaProps } from './../../utils/customProps';

export function calculatePaddingProps(
  safeAreaProps: SafeAreaProps,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  const paddingTop = calculatePaddingTop(
    safeAreaProps,
    paddingProps,
    insets,
    sizes
  );
  const paddingBottom = calculatePaddingBottom(
    safeAreaProps,
    paddingProps,
    insets,
    sizes
  );
  const paddingLeft = calculatePaddingLeft(
    safeAreaProps,
    paddingProps,
    insets,
    sizes
  );
  const paddingRight = calculatePaddingRight(
    safeAreaProps,
    paddingProps,
    insets,
    sizes
  );
  return themeTools.omitUndefined({
    pt: paddingTop,
    pb: paddingBottom,
    pr: paddingRight,
    pl: paddingLeft,
  });
}
function getValueInPixels(
  paddingProps: any,
  propKeys: any,
  sizes: any,
  inset: any
) {
  const originalValue = propKeys.length
    ? sizes[paddingProps[propKeys[propKeys.length - 1]]]
    : 0;
  return originalValue
    ? parseInt(originalValue, 10) + inset + 'px'
    : inset + 'px';
}

export function calculatePaddingTop(
  safeAreaProps: any,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    !safeAreaProps.safeArea &&
    !safeAreaProps.safeAreaTop &&
    !safeAreaProps.safeAreaY
  ) {
    return;
  }
  if (!insets.top) {
    return;
  }
  const propKeys = getRelatedPaddingProps(paddingProps, [
    'p',
    'padding',
    'pt',
    'paddingTop',
    'py',
    'paddingY',
  ]);

  return getValueInPixels(paddingProps, propKeys, sizes, insets.top);
}
export function calculatePaddingBottom(
  safeAreaProps: any,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    !safeAreaProps.safeArea &&
    !safeAreaProps.safeAreaBottom &&
    !safeAreaProps.safeAreaY
  ) {
    return;
  }
  if (!insets.bottom) {
    return;
  }
  const propKeys = getRelatedPaddingProps(paddingProps, [
    'p',
    'padding',
    'pb',
    'paddingBottom',
    'py',
    'paddingY',
  ]);

  return getValueInPixels(paddingProps, propKeys, sizes, insets.bottom);
}
export function calculatePaddingLeft(
  safeAreaProps: any,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    !safeAreaProps.safeArea &&
    !safeAreaProps.safeAreaLeft &&
    !safeAreaProps.safeAreaX
  ) {
    return;
  }
  if (!insets.left) {
    return;
  }

  const propKeys = getRelatedPaddingProps(paddingProps, [
    'p',
    'padding',
    'pl',
    'paddingLeft',
    'px',
    'paddingX',
  ]);

  return getValueInPixels(paddingProps, propKeys, sizes, insets.left);
}
export function calculatePaddingRight(
  safeAreaProps: any,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    !safeAreaProps.safeArea &&
    !safeAreaProps.safeAreaRight &&
    !safeAreaProps.safeAreaX
  ) {
    return;
  }
  if (!insets.right) {
    return;
  }
  const propKeys = getRelatedPaddingProps(paddingProps, [
    'p',
    'padding',
    'pr',
    'paddingRight',
    'px',
    'paddingX',
  ]);

  return getValueInPixels(paddingProps, propKeys, sizes, insets.right);
}

// const paddingBottomKeys = [
//   'p',
//   'padding',
//   'pb',
//   'paddingBottom',
//   'py',
//   'paddingY',
// ];
// const paddingRightKeys = [
//   'p',
//   'padding',
//   'pr',
//   'paddingRight',
//   'px',
//   'paddingX',
// ];
function getRelatedPaddingProps(props: any, relatedKeys: Array<any>) {
  return Object.keys(props).filter((key) => relatedKeys.includes(key));
}
export function getSortedProps(props: any) {
  let [safeAreaProps, sansSafeAreaProps] = themeTools.extractInObject(props, [
    'safeArea',
    'safeAreaX',
    'safeAreaY',
    'safeAreaTop',
    'safeAreaBottom',
    'safeAreaLeft',
    'safeAreaRight',
  ]);
  let [
    paddingProps,
    sansPaddingProps,
  ] = themeTools.sortedExtractInObject(sansSafeAreaProps, [
    'p',
    'padding',
    'pt',
    'paddingTop',
    'pr',
    'paddingRight',
    'pb',
    'paddingBottom',
    'pl',
    'paddingLeft',
    'px',
    'paddingX',
    'py',
    'paddingY',
  ]);
  return { safeAreaProps, paddingProps, sansPaddingProps };
}
