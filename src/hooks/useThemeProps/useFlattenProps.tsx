import merge from 'lodash.merge';

const HIGHEST_PREF = 100;
const specificityPrecedence = [HIGHEST_PREF, 70, 60, 55, 50, 40, 30, 10, 1];

const pseudoPropsMap = {
  _web: { dependentOn: 'platform', priority: specificityPrecedence[7] },
  _ios: { dependentOn: 'platform', priority: specificityPrecedence[7] },
  _android: { dependentOn: 'platform', priority: specificityPrecedence[7] },

  _light: { dependentOn: 'colormode', priority: specificityPrecedence[7] },
  _dark: { dependentOn: 'colormode', priority: specificityPrecedence[7] },

  // TODO: have to add more interactionProps and stateProps
  _indeterminate: {
    dependentOn: 'state',
    respondTo: 'isIndeterminate',
    priority: specificityPrecedence[6],
  },
  _checked: {
    dependentOn: 'state',
    respondTo: 'isChecked',
    priority: specificityPrecedence[6],
  },
  _invalid: {
    dependentOn: 'state',
    respondTo: 'isInvalid',
    priority: specificityPrecedence[5],
  },
  _focus: {
    dependentOn: 'state',
    respondTo: 'isFocused',
    priority: specificityPrecedence[4],
  },
  _focusVisible: {
    dependentOn: 'state',
    respondTo: 'isFocusVisible',
    priority: specificityPrecedence[3],
  },
  _hover: {
    dependentOn: 'state',
    respondTo: 'isHovered',
    priority: specificityPrecedence[2],
  },
  _pressed: {
    dependentOn: 'state',
    respondTo: 'isPressed',
    priority: specificityPrecedence[1],
  },
  _disabled: {
    dependentOn: 'state',
    respondTo: 'isDisabled',
    priority: specificityPrecedence[0],
  },
};

const compareSpecificity = (exisiting: any, upcoming: any, property: any) => {
  if (!exisiting) return true;
  for (let index = 0; index < specificityPrecedence.length; index++) {
    if (
      exisiting[specificityPrecedence[index]] >
      upcoming[specificityPrecedence[index]]
    ) {
      return false;
    } else if (
      exisiting[specificityPrecedence[index]] <
      upcoming[specificityPrecedence[index]]
    ) {
      return true;
    }
  }
  return true;
};

const shouldResolvePseudoProp = ({
  property,
  state,
  platform,
  colormode,
}: any) => {
  if (
    // @ts-ignore
    pseudoPropsMap[property].dependentOn === 'platform'
  ) {
    return property === `_${platform}`;
  } else if (
    // @ts-ignore
    pseudoPropsMap[property].dependentOn === 'colormode'
  ) {
    return property === `_${colormode}`;
    // @ts-ignore
  } else if (pseudoPropsMap[property].dependentOn === 'state') {
    // @ts-ignore
    return state[pseudoPropsMap[property].respondTo];
  } else {
    return false;
  }
};

const pleaseDoThisForMe = (
  { props, colormode, platform, state, currentSpecificity }: any,
  flattenProps = {},
  specificityMap = {},
  priority: number
) => {
  for (const property in props) {
    // NOTE: the order is important here. Keep in mind while specificity breakpoints.
    const propertySpecity = currentSpecificity
      ? { ...currentSpecificity }
      : {
          [HIGHEST_PREF]: 0,
          70: 0,
          60: 0,
          50: 0,
          55: 0,
          40: 0,
          30: 0,
          10: 0,
          1: priority,
        };

    // @ts-ignore
    // if (state[pseudoPropsMap[property]?.respondTo]) {
    if (pseudoPropsMap[property]) {
      // @ts-ignore

      if (shouldResolvePseudoProp({ property, state, platform, colormode })) {
        propertySpecity[pseudoPropsMap[property].priority]++;

        pleaseDoThisForMe(
          {
            props: props[property],
            colormode,
            platform,
            state,
            currentSpecificity: propertySpecity,
          },
          flattenProps,
          specificityMap,
          priority
        );
      }

      // @ts-ignore
    } else if (
      compareSpecificity(specificityMap[property], propertySpecity, property)
    ) {
      // STEP : update specificity

      // @ts-ignore
      specificityMap[property] = propertySpecity;
      if (property.startsWith('_')) {
        // merging internal props (like, _text, _checked, ...)
        flattenProps[property] = merge(
          {},
          flattenProps[property],
          props[property]
        );
      } else {
        // replacing simple props (like, p, m, bg, color, ...)

        flattenProps[property] = props[property];
      }
    }
  }
};

export const useFlattenProps = (
  { props, colormode, platform, state, currentSpecificityMap }: any,
  priority: number
) => {
  const flattenProps = {};

  const specificityMap = currentSpecificityMap || {};

  // STEP 1.a (if): Check weather it should be recursively resolved
  // NOTE: (when true) recursively resolved it
  // STEP 1.b (else if): Check specificty
  // STEP 1.b.i: Check for pseudo props
  // NOTE: (when true) Merge it.
  // NOTE: (when false) Replace it.

  // Checking weather it should be recursively resolved
  pleaseDoThisForMe(
    {
      props,
      colormode,
      platform,
      state,
      currentSpecificityMap,
    },
    flattenProps,
    specificityMap,
    priority
  );

  return [flattenProps, specificityMap];
};
