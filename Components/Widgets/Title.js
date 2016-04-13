/* @flow */
'use strict';

import React, {Component, Text, View } from 'react-native';


export default class Title extends Component {   
    render() {
        return(
           <View><Text style={{color: '#fff', fontSize: 20, fontWeight: "500", alignSelf: 'center'}}>{this.props.children}</Text></View>
        );
    }   
}

