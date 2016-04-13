/* @flow */
'use strict';

import React, {Text, View, TouchableHighlight } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import styles from '../Styles/circularbutton';
import {brandPrimary as primary} from '../Styles/variable';

export default class Button extends NativeStarterComponent {
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
