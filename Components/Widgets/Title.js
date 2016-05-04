/* @flow */
'use strict';

import React, {Component, Text, View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';


export default class Title extends NativeBaseComponent {   
	
    render() {
        return(
           <View><Text style={{color: '#fff', fontSize: this.getTheme().fontSizeH3, fontWeight: "500", alignSelf: 'center'}}>{this.props.children}</Text></View>
        );
    }   
}

