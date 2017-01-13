/* @flow */
'use strict';
import React from 'react';
import {View, TextInput,Platform} from 'react-native';
import NativeBaseComponent from '../../Base/NativeBaseComponent';
import computeProps from '../../../Utils/computeProps';

export default class Input extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    getInitialStyle() {
        return {
            input: {
                height: this.props.toolbar ? 30 : this.getTheme().inputHeightBase,
                color: this.getTheme().inputColor,
                paddingLeft: 5,
                paddingRight: 5,
                fontSize: this.getTheme().inputFontSize,
                lineHeight: this.getTheme().inputLineHeight,
                marginTop: (this.props.inlineLabel) ? ((Platform.OS === 'ios') ? undefined : 5) : undefined
            }
        }
    }

    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().input
        }

        return computeProps(this.props, defaultProps);
    }
    render() {

        return (
            <View style={{ flex: 1}}>
                <TextInput ref={(c) => {this._textInput = c; this._root = c;}} {...this.prepareRootProps()} placeholderTextColor={ this.props.placeholderTextColor ? this.props.placeholderTextColor : this.getTheme().inputColorPlaceholder } underlineColorAndroid='rgba(0,0,0,0)' />
            </View>
        );
    }

}
