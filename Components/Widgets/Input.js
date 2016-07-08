/* @flow */
'use strict';
import React from 'react';
import {View, TextInput} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
export default class Input extends NativeBaseComponent {
    getInitialStyle() {
        return {
            input: {
                height: this.getTheme().inputHeightBase,
                color: this.getTheme().inputColor,
                paddingLeft: 5,
                paddingRight: 5
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
                <TextInput {...this.prepareRootProps()} placeholderTextColor={ this.props.placeholderTextColor ? this.props.placeholderTextColor : this.getContextForegroundColor() ? this.getContextForegroundColor() : this.getTheme().inputColorPlaceholder } underlineColorAndroid='rgba(0,0,0,0)' />
            </View>
        );
    }
}