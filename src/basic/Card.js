import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ListView, ViewPropTypes } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Card extends Component {
  render() {
    if (this.props.dataArray && this.props.renderRow) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      const dataSource = ds.cloneWithRows(this.props.dataArray);
      return (
        <ListView
          {...this.props}
          enableEmptySections
          dataSource={dataSource}
          renderRow={this.props.renderRow}
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
  dataArray: PropTypes.array,
  renderRow: PropTypes.func
};

const StyledCard = connectStyle("NativeBase.Card", {}, mapPropsToStyleNames)(
  Card
);

export { StyledCard as Card };
