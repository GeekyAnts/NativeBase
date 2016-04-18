/* @flow */
'use strict';

import React, {Text, View, TouchableOpacity } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';

export default class ButtonGroup extends NativeBaseComponent {
    render() {
        return(
            <View>{this.props.children}</View>
        );
    }    

}

