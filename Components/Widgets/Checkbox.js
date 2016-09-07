/* @flow */
'use strict';

import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CheckBox extends NativeBaseComponent {

    getInitialStyle() {
        return {
            checkbox: {
                borderRadius: (Platform.OS === 'ios') ? 13 : 2,
                overflow: 'hidden',
                width: this.getTheme().checkboxSize,
                height: this.getTheme().checkboxSize,
                borderWidth: (Platform.OS === 'ios') ? 1 : 2,
                paddingLeft: (Platform.OS === 'ios') ? 5 : 2,
                paddingBottom: (Platform.OS === 'ios') ? 0 : 5,
                borderColor: this.getTheme().checkboxBgColor,
                backgroundColor: this.props.checked ? this.getTheme().checkboxBgColor : 'transparent'
            }
        }
    }

    render() {
        return(
            <TouchableOpacity style={this.getInitialStyle().checkbox} {...this.props}>
            <Icon name={(Platform.OS === 'ios') ? 'ios-checkmark-outline' : 'md-checkmark'} style={{color:  this.props.checked ? this.getTheme().checkboxTickColor : 'transparent', lineHeight: (Platform.OS === 'ios') ? this.getTheme().checkboxSize/0.93 : this.getTheme().checkboxSize-5, marginTop: (Platform.OS==='ios') ? undefined : 1, fontSize: (Platform.OS === 'ios') ? this.getTheme().checkboxSize/0.8 : this.getTheme().checkboxSize/1.2}} />
            </TouchableOpacity>
        );
    }
}
