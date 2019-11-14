import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Card extends Component {
  render() {
    if (this.props.dataArray && this.props.renderRow) {
      return (
        <FlatList
          {...this.props}
          data={this.props.dataArray}
          renderItem={this.props.renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    return (
      <View ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    );
  }
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
