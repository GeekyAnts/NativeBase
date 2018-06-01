import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StatusBar, ViewPropTypes } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";
import variable from "../theme/variables/platform";
import _ from "lodash";
class Header extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      orientation: "portrait"
    };
  }
  layoutChange(val) {
    let maxComp = Math.max(variable.deviceWidth, variable.deviceHeight);
    if (val.width >= maxComp) this.setState({ orientation: "landscape" });
    else {
      this.setState({ orientation: "portrait" });
    }
  }
  calculateHeight(mode, inSet) {
    let inset = null;
    if (inSet != undefined) {
      inset = inSet;
    } else {
      inset = variable.Inset;
    }
    const InsetValues = mode === "portrait" ? inset.portrait : inset.landscape;
    let oldHeight = null;
    if (this.props.style.height != undefined) {
      oldHeight = this.props.style.height;
    } else if (this.props.style[1].height) {
      oldHeight = this.props.style[1].height;
    } else {
      oldHeight = this.props.style[0].height;
    }
    let height = oldHeight + InsetValues.topInset;
    return height;
  }
  calculatePadder(mode, inSet) {
    let inset = null;
    if (inSet != undefined) {
      inset = inSet;
    } else {
      inset = variable.Inset;
    }
    const InsetValues = mode === "portrait" ? inset.portrait : inset.landscape;
    let topPadder = null;
    if (this.props.style[1] !== undefined) {
      if (
        this.props.style[1].padding !== undefined ||
        this.props.style[1].paddingTop !== undefined
      ) {
        topPadder =
          (this.props.style[1].paddingTop
            ? this.props.style[1].paddingTop
            : this.props.style[1].padding) + InsetValues.topInset;
      }
    } else if (
      this.props.style.padding !== undefined &&
      this.props.style.paddingTop !== undefined
    ) {
      topPadder =
        (this.props.style.paddingTop
          ? this.props.style.paddingTop
          : this.props.style.padding) + InsetValues.topInset;
    } else {
      topPadder = InsetValues.topInset;
    }
    return topPadder;
  }
  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    const platformStyle = variables.platformStyle;
    return (
      <View onLayout={e => this.layoutChange(e.nativeEvent.layout)}>
        <StatusBar
          backgroundColor={
            this.props.androidStatusBarColor
              ? this.props.androidStatusBarColor
              : variables.statusBarColor
          }
          barStyle={
            this.props.iosBarStyle
              ? this.props.iosBarStyle
              : platformStyle === "material"
                ? "light-content"
                : variables.iosStatusbar
          }
        />
        {variable.isIphoneX ? (
          <View
            ref={c => (this._root = c)}
            {...this.props}
            style={[
              this.props.style,
              {
                height: this.calculateHeight(
                  this.state.orientation,
                  variables.Inset
                ),
                paddingTop: this.calculatePadder(
                  this.state.orientation,
                  variables.Inset
                )
              }
            ]}
          />
        ) : (
          <View ref={c => (this._root = c)} {...this.props} />
        )}
      </View>
    );
  }
}

Header.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  searchBar: PropTypes.bool,
  rounded: PropTypes.bool
};

const StyledHeader = connectStyle(
  "NativeBase.Header",
  {},
  mapPropsToStyleNames
)(Header);
export { StyledHeader as Header };