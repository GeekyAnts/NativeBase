/* @flow */
'use strict';

import React, {View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';

export default class Container extends NativeBaseComponent {
    render() {
        return(
            <View style={{flex:1}}>{this.props.children}</View>
        );
    }    

}

