import React, { Component } from "react";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import variable from "../theme/variables/platform";

class Content extends Component {
	render() {
		const variables = this.context.theme
			? this.context.theme["@@shoutem.theme/themeStyle"].variables
			: variable;
		return (
			<KeyboardAwareScrollView
				automaticallyAdjustContentInsets={false}
				resetScrollToCoords={this.props.disableKBDismissScroll ? null : { x: 0, y: 0 }}
				keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps ? this.props.keyboardShouldPersistTaps : 'handled'}
				ref={c => {
					this._scrollview = c;
					this._root = c;
				}}
				{...this.props}
				contentContainerStyle={[{ padding: this.props.padder ? variables.contentPadding : undefined }, this.props.contentContainerStyle]}
			>
				{this.props.children}
			</KeyboardAwareScrollView>
		);
	}
}

Content.propTypes = {
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
	padder: PropTypes.bool,
	disableKBDismissScroll: PropTypes.bool,
	enableResetScrollToCoords: PropTypes.bool,
	keyboardShouldPersistTaps: PropTypes.string
};

const StyledContent = connectStyle("NativeBase.Content", {}, mapPropsToStyleNames)(Content);

export { StyledContent as Content };
