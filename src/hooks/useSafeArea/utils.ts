import { themeTools } from '../../theme';
import { baseFontSize } from '../../theme/tools/utils';
import type { SafeAreaProps } from './../../components/types/ExtraProps';
import isNil from 'lodash.isnil';

export function calculatePaddingProps(
  safeAreaProps: SafeAreaProps,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  return themeTools.omitUndefined({
    pt: calculatePaddingTop(safeAreaProps, paddingProps, insets, sizes),
    pb: calculatePaddingBottom(safeAreaProps, paddingProps, insets, sizes),
    pl: calculatePaddingLeft(safeAreaProps, paddingProps, insets, sizes),
    pr: calculatePaddingRight(safeAreaProps, paddingProps, insets, sizes),
  });
}
function getValueInPixels(
  paddingProps: any,
  paddingKeys: any,
  sizes: any,
  inset: any,
  manualInset: number | string
) {
  let appliedInset: any = 0;
  let originalValue = paddingKeys.length
    ? sizes[paddingProps[paddingKeys[paddingKeys.length - 1]]]
    : 0;

  if (!isNil(manualInset) && typeof manualInset !== 'boolean') {
    // DOC: Handles case of manually passed inset
    appliedInset =
      typeof manualInset === 'string' && manualInset.includes('px')
        ? parseInt(manualInset, 10)
        : sizes[manualInset];
  } else {
    // DOC: Handles case of auto inset
    appliedInset = inset;
  }

  if (typeof originalValue === 'string') {
    if (originalValue.endsWith('px')) {
      return parseInt(originalValue, 10) + parseInt(appliedInset, 10) + 'px';
    } else if (originalValue.endsWith('rem')) {
      return (
        parseFloat(originalValue) * baseFontSize +
        parseInt(appliedInset, 10) +
        'px'
      );
    }
  }

  return originalValue
    ? parseInt(originalValue, 10) + parseInt(appliedInset, 10) + 'px'
    : parseInt(appliedInset, 10) + 'px';
}

export function calculatePaddingTop(
  safeAreaProps: SafeAreaProps,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    isNil(safeAreaProps.safeArea) &&
    isNil(safeAreaProps.safeAreaTop) &&
    isNil(safeAreaProps.safeAreaY)
  ) {
    return;
  }

  // DOC: Adding it for manual inset passed by the user
  let [topSafeAreaProps] = themeTools.orderedExtractInObject(safeAreaProps, [
    'safeArea',
    'safeAreaY',
    'safeAreaTop',
  ]);
  let topSafeAreaArray = Object.keys(topSafeAreaProps);
  const manualInset = topSafeAreaArray.length
    ? topSafeAreaProps[topSafeAreaArray[topSafeAreaArray.length - 1]]
    : undefined;
  if (!insets.top && (typeof manualInset === 'boolean' || !manualInset)) {
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
  return getValueInPixels(
    paddingProps,
    propKeys,
    sizes,
    insets.top,
    manualInset
  );
}
export function calculatePaddingBottom(
  safeAreaProps: SafeAreaProps,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    isNil(safeAreaProps.safeArea) &&
    isNil(safeAreaProps.safeAreaBottom) &&
    isNil(safeAreaProps.safeAreaY)
  ) {
    return;
  }
  let [bottomSafeAreaProps] = themeTools.orderedExtractInObject(safeAreaProps, [
    'safeArea',
    'safeAreaY',
    'safeAreaBottom',
  ]);
  let bottomSafeAreaArray = Object.keys(bottomSafeAreaProps);
  const manualInset = bottomSafeAreaArray.length
    ? bottomSafeAreaProps[bottomSafeAreaArray[bottomSafeAreaArray.length - 1]]
    : undefined;
  if (!insets.bottom && (!manualInset || typeof manualInset === 'boolean')) {
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

  return getValueInPixels(
    paddingProps,
    propKeys,
    sizes,
    insets.bottom,
    manualInset
  );
}
export function calculatePaddingLeft(
  safeAreaProps: SafeAreaProps,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    isNil(safeAreaProps.safeArea) &&
    isNil(safeAreaProps.safeAreaLeft) &&
    isNil(safeAreaProps.safeAreaX)
  ) {
    return;
  }
  let [leftSafeAreaProps] = themeTools.orderedExtractInObject(safeAreaProps, [
    'safeArea',
    'safeAreaLeft',
    'safeAreaX',
  ]);
  let leftSafeAreaArray = Object.keys(leftSafeAreaProps);
  // DOC: Since last value takes precedence so, directly takes last value
  const manualInset = leftSafeAreaArray.length
    ? leftSafeAreaProps[leftSafeAreaArray[leftSafeAreaArray.length - 1]]
    : undefined;
  if (!insets.left && (!manualInset || typeof manualInset === 'boolean')) {
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

  return getValueInPixels(
    paddingProps,
    propKeys,
    sizes,
    insets.left,
    manualInset
  );
}
export function calculatePaddingRight(
  safeAreaProps: SafeAreaProps,
  paddingProps: any,
  insets: any,
  sizes: any
) {
  if (
    isNil(safeAreaProps.safeArea) &&
    isNil(safeAreaProps.safeAreaRight) &&
    isNil(safeAreaProps.safeAreaX)
  ) {
    return;
  }
  // DOC: Adding it for manual inset passed by the user
  let [rightSafeAreaProps] = themeTools.orderedExtractInObject(safeAreaProps, [
    'safeArea',
    'safeAreaX',
    'safeAreaRight',
  ]);
  let rightSafeAreaArray = Object.keys(rightSafeAreaProps);
  const manualInset = rightSafeAreaArray.length
    ? rightSafeAreaProps[rightSafeAreaArray[rightSafeAreaArray.length - 1]]
    : undefined;

  if (!insets.right && (!manualInset || typeof manualInset === 'boolean')) {
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

  return getValueInPixels(
    paddingProps,
    propKeys,
    sizes,
    insets.right,
    manualInset
  );
}

function getRelatedPaddingProps(props: any, relatedKeys: Array<any>) {
  return Object.keys(props).filter((key) => relatedKeys.includes(key));
}
export function getSortedProps(props: any) {
  let [
    safeAreaProps,
    sansSafeAreaProps,
  ] = themeTools.orderedExtractInObject(props, [
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
  ] = themeTools.orderedExtractInObject(sansSafeAreaProps, [
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
