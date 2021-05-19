import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

const Body = (props) => {
  const root = useRef(null);
  
  return <View ref={root} {...props} />;
  
}

Body.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledBody = connectStyle('NativeBase.Body', {}, mapPropsToStyleNames)(
  Body
);

export { StyledBody as Body };
