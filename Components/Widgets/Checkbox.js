/* @flow */
'use strict';

import React from 'react';
import {View, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from "./Icon";

export default class CheckBox extends NativeBaseComponent {

    getInitialStyle() {
        return {
            checkbox: {
                borderRadius: (Platform.OS === 'ios') ? 13 : 2,
                overflow: 'hidden',
                width: 26,
                height: 26,
                borderWidth: (Platform.OS === 'ios') ? 1 : 2,
                paddingLeft: (Platform.OS === 'ios') ? 5 : 1,
                paddingBottom: (Platform.OS === 'ios') ? 0 : 5,
                borderColor: this.getTheme().checkboxBgColor,
                backgroundColor: this.props.checked ? this.getTheme().checkboxBgColor : 'transparent'
            }
        }
    }

    render() {
        return(
            <View style={this.getInitialStyle().checkbox}>
                <Icon name={(Platform.OS === 'ios') ? "ios-checkmark-outline" : "md-checkmark"} style={{color:  this.props.checked ?  this.getTheme().checkboxTickColor : "transparent", lineHeight: (Platform.OS === 'ios') ? 28 : 20, fontSize: (Platform.OS === 'ios') ? undefined : 26, marginTop: (Platform.OS === 'ios') ? 0 : -2}} />
            </View>
        );
    }
}
