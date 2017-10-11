import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text as RNText } from "react-native";
import _ from "lodash";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Text extends Component {
	render() {
    const {
      uppercase,
      children,
    } = this.props;

    let text;
    if (uppercase) {
      text = React.Children.map(children, child => {
        if (_.isString(child)) {
          return _.toUpper(child);
        } else {
          return child;
        }
      })
    } else {
      text = children;
    }

		return (
			<RNText ref={c => (this._root = c)} {...this.props}>
				{text}
			</RNText>
		);
	}
}

Text.propTypes = {
	...RNText.propTypes,
	uppercase: PropTypes.bool,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

Text.defaultProps = {
	uppercase: false,
};

const StyledText = connectStyle("NativeBase.Text", {}, mapPropsToStyleNames)(Text);

export { StyledText as Text };
