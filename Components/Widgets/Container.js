/* @flow */
'use strict';

import React, {View } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';

export default class Container extends NativeStarterComponent {
    render() {
        return(
            <View style={{flex:1}}>{this.props.children}</View>
        );
    }    

}

