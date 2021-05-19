import React,{ useRef } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

const Card=(props)=> {
  const root = useRef(null);
    if (props.dataArray && props.renderRow) {
      return (
        <FlatList
          {...props}
          data={props.dataArray}
          renderItem={props.renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    return (
      <View ref={root} {...props}>
        {props.children}
      </View>
    );
  
}

Card.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  dataArray: PropTypes.array,
  renderRow: PropTypes.func
};

const StyledCard = connectStyle('NativeBase.Card', {}, mapPropsToStyleNames)(
  Card
);

export { StyledCard as Card };
