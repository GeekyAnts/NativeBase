/* @flow */
'use strict';

import React from 'react';
import {View, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from './Icon';

export default class Radio extends NativeBaseComponent {

    getInitialStyle() {
        return {
            radio: {}
        }
    }

    render() {
        return(
            <View >
            {(Platform.OS === 'ios') ?
            <Icon name={this.props.selected ? 'ios-radio-button-on' : 'ios-radio-button-off-outline'} style={{color:  this.props.selected ? this.getTheme().radioSelectedColor : this.getTheme().radioColor, lineHeight: this.getTheme().radioBtnSize+4, fontSize: this.getTheme().radioBtnSize}} />
            :
            <Icon name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'} style={{color: this.props.selected ? this.getTheme().radioSelectedColor : this.getTheme().radioColor, lineHeight: this.getTheme().radioBtnSize+1, fontSize: this.getTheme().radioBtnSize}} />
            }
            </View>
        );
    }
}
