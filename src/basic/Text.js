import React, { Component, PropTypes } from "react";
import { Text as RNText } from "react-native";
import _ from "lodash";

import { connectStyle } from "native-base-shoutem-theme";
import { connectAnimation } from "@shoutem/animation";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Text extends Component {
  render() {
    return (
      <RNText ref={c => (this._root = c)} {...this.props}>
        {this.props.uppercase
          ? _.toUpper(this.props.children)
          : this.props.children}
      </RNText>
    );
  }
}

Text.propTypes = {
  ...RNText.propTypes,
  uppercase: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

Text.defaultProps = {
  uppercase: false
};

const AnimatedText = connectAnimation(Text);
const StyledText = connectStyle("NativeBase.Text", {}, mapPropsToStyleNames)(
  Text
);

export { StyledText as Text };
