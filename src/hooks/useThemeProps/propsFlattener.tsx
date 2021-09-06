import merge from 'lodash.merge';

const SPECIFICITY_100 = 100;
const SPECIFICITY_70 = 70;
const SPECIFICITY_60 = 60;
const SPECIFICITY_55 = 55;
const SPECIFICITY_50 = 50;
const SPECIFICITY_40 = 40;
const SPECIFICITY_30 = 30;
const SPECIFICITY_10 = 10;
const SPECIFICITY_1 = 1;
const specificityPrecedence = [
  SPECIFICITY_100,
  SPECIFICITY_70,
  SPECIFICITY_60,
  SPECIFICITY_55,
  SPECIFICITY_50,
  SPECIFICITY_40,
  SPECIFICITY_30,
  SPECIFICITY_10,
  SPECIFICITY_1,
];

const pseudoPropsMap: any = {
  _web: { dependentOn: 'platform', priority: SPECIFICITY_10 },
  _ios: { dependentOn: 'platform', priority: SPECIFICITY_10 },
  _android: { dependentOn: 'platform', priority: SPECIFICITY_10 },

  _light: { dependentOn: 'colormode', priority: SPECIFICITY_10 },
  _dark: { dependentOn: 'colormode', priority: SPECIFICITY_10 },

  // TODO: have to add more interactionProps and stateProps
  _indeterminate: {
    dependentOn: 'state',
    respondTo: 'isIndeterminate',
    priority: SPECIFICITY_30,
  },
  _checked: {
    dependentOn: 'state',
    respondTo: 'isChecked',
    priority: SPECIFICITY_30,
  },
  // Add new pseudeo props in between -------
  _unchecked: {
    dependentOn: 'state',
    respondTo: 'isChecked',
    priority: SPECIFICITY_30,
  },
  _readOnly: {
    dependentOn: 'state',
    respondTo: 'isReadOnly',
    priority: SPECIFICITY_30,
  },
  // Add new pseudeo props in between -------
  _invalid: {
    dependentOn: 'state',
    respondTo: 'isInvalid',
    priority: SPECIFICITY_40,
  },
  _focus: {
    dependentOn: 'state',
    respondTo: 'isFocused',
    priority: SPECIFICITY_50,
  },
  _focusVisible: {
    dependentOn: 'state',
    respondTo: 'isFocusVisible',
    priority: SPECIFICITY_55,
  },
  _hover: {
    dependentOn: 'state',
    respondTo: 'isHovered',
    priority: SPECIFICITY_60,
  },
  _pressed: {
    dependentOn: 'state',
    respondTo: 'isPressed',
    priority: SPECIFICITY_70,
  },
  _disabled: {
    dependentOn: 'state',
    respondTo: 'isDisabled',
    priority: SPECIFICITY_100,
  },
};

const compareSpecificity = (exisiting: any, upcoming: any) => {
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
  if (pseudoPropsMap[property].dependentOn === 'platform') {
    return property === `_${platform}`;
  } else if (pseudoPropsMap[property].dependentOn === 'colormode') {
    return property === `_${colormode}`;
  } else if (pseudoPropsMap[property].dependentOn === 'state') {
    return state[pseudoPropsMap[property].respondTo];
  } else {
    return false;
  }
};

const simplifyProps = (
  { props, colormode, platform, state, currentSpecificity }: any,
  flattenProps: any = {},
  specificityMap: any = {},
  priority: number
) => {
  for (const property in props) {
    // NOTE: the order is important here. Keep in mind while specificity breakpoints.
    const propertySpecity = currentSpecificity
      ? { ...currentSpecificity }
      : {
          [SPECIFICITY_100]: 0,
          [SPECIFICITY_70]: 0,
          [SPECIFICITY_60]: 0,
          [SPECIFICITY_50]: 0,
          [SPECIFICITY_55]: 0,
          [SPECIFICITY_40]: 0,
          [SPECIFICITY_30]: 0,
          [SPECIFICITY_10]: 0,
          [SPECIFICITY_1]: priority,
        };

    if (
      pseudoPropsMap[property] &&
      (state[pseudoPropsMap[property]?.respondTo] ||
        ['_dark', '_light', '_web', '_ios', '_android'].includes(property)) // array of state independent props
    ) {
      if (shouldResolvePseudoProp({ property, state, platform, colormode })) {
        propertySpecity[pseudoPropsMap[property].priority]++;

        simplifyProps(
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
    } else if (compareSpecificity(specificityMap[property], propertySpecity)) {
      // STEP : update specificity
      // TODO: Need to find a fix
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

export const propsFlattener = (
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

  simplifyProps(
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
