import React, { Component } from "react";
import PropTypes from "prop-types";

import { connectStyle } from "native-base-shoutem-theme";

import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class IconNB extends Component {
	static contextTypes = {
		theme: PropTypes.object,
	};

	componentWillMount() {
		if (this.context.theme) {
			switch (this.context.theme["@@shoutem.theme/themeStyle"].variables.iconFamily) {
				case "Ionicons":
					this.Icon = Ionicons;
					break;
				case "Entypo":
					this.Icon = Entypo;
					break;
				case "Feather":
					this.Icon = Feather;
					break;
				case "FontAwesome":
					this.Icon = FontAwesome;
					break;
				case "Foundation":
					this.Icon = Foundation;
					break;
				case "MaterialIcons":
					this.Icon = MaterialIcons;
					break;
				case "MaterialCommunityIcons":
					this.Icon = MaterialCommunityIcons;
					break;
				case "Octicons":
					this.Icon = Octicons;
					break;
				case "Zocial":
					this.Icon = Zocial;
					break;
				case "SimpleLineIcons":
					this.Icon = SimpleLineIcons;
					break;
				case "EvilIcons":
					this.Icon = EvilIcons;
					break;
				default:
					this.Icon = Ionicons;
			}
		} else {
			this.Icon = Ionicons;
		}
	}

	render() {
		return <this.Icon ref={c => (this._root = c)} {...this.props} />;
	}
}

IconNB.propTypes = {
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledIconNB = connectStyle("NativeBase.IconNB", {}, mapPropsToStyleNames)(IconNB);

export { StyledIconNB as IconNB };
