/* @flow */
'use strict';

import React, {Text, View, TouchableOpacity } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';

export default class ButtonGroup extends NativeStarterComponent {
    render() {
        return(
            <View>{this.props.children}</View>
        );
    }    

}

