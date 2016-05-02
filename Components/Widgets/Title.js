/* @flow */
'use strict';

import React, {Component, Text, View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';



export default class Title extends NativeBaseComponent {   
    static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }

    render() {
        return(
           <View><Text style={{color: '#fff', fontSize: this.getTheme().fontSizeH3, fontWeight: "500", alignSelf: 'center'}}>{this.props.children}</Text></View>
        );
    }   
}

