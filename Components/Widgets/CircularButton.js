/* @flow */
'use strict';

import React, {Text, View, TouchableHighlight } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import styles from '../Styles/circularbutton';
import {brandPrimary as primary} from '../Styles/variable';

export default class Button extends NativeBaseComponent {
    render() {
        return(
            <TouchableHighlight
                style={styles.button}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight> 
        );
    }    

}
