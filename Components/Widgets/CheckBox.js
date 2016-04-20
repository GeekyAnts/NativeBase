/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Icon from 'react-native-vector-icons/Ionicons';
import Checkbox from 'react-native-checkbox';

export default class CheckBox extends NativeBaseComponent {

    getInitialStyle() {
        return {
            button: {
                padding: 10,
                flex: 1,
                borderColor: 'transparent',
                height: 45,
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginBottom: 10,
                backgroundColor: this.getTheme().btnPrimaryBg,
            },
            buttonText: {
                fontSize: this.getTheme().btnTextSize,
                color: this.getTheme().btnPrimaryColor
            }
        }
    }
    prepareRootProps() {

        return this.props;

    }
    
    render() { 
        return(
          <Checkbox {...this.prepareRootProps()}/>
        );
    }

}
