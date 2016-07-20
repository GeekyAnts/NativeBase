/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

import variables from "../Themes/light";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';

var Icon;

switch(variables.iconFamily) {
    case "Ionicons":
        Icon = Ionicons;
    break;
    case "Entypo":
        Icon = Entypo;
    break;
    case "FontAwesome":
        Icon = FontAwesome;
    break;
    case "Foundation":
        Icon = Foundation;
    break;
    case "MaterialIcons":
        Icon = MaterialIcons;
    break;
    case "Octicons":
        Icon = Octicons;
    break;
    case "Zocial":
        Icon = Zocial;
    break;
    default:
        Icon = Ionicons;
}


export default class IconNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            icon: {
                fontSize: this.getTheme().iconFontSize,
                color: this.getContextForegroundColor()
            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().icon
        };

        return computeProps(this.props, defaultProps);

    }

    render() {
        return(
            <Icon {...this.prepareRootProps()}/>
        );
    }
}
