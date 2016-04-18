/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import NativeBaseComponent from '../../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../../Utils/computeProps';


var button = StyleSheet.create({
    button: {
        padding: 10,
        borderColor: 'transparent',
        alignSelf: 'stretch',
        height: 45,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        flex: 1,
        color: '#fff'
    }
});


export default class Button extends NativeBaseComponent {

    prepareRootProps() {

        var type = { backgroundColor: (this.props.primary) ? this.getTheme().primary : 
                       (this.props.secondary) ? this.getTheme().secondary :
                       (this.props.success) ? this.getTheme().success :
                       (this.props.danger) ? this.getTheme().danger :
                       (this.props.warning) ? this.getTheme().warning :
                       (this.props.backgroundColor) ? this.props.backgroundColor :
                       this.getTheme().secondary,
                    borderRadius: (this.props.rounded) ? this.getTheme().borderRadiusLarge : this.getTheme().borderRadiusBase
        }

        var  addedProps = _.merge(button.button,type);

        var defaultProps = {
            style: addedProps
        }

        console.log("button style", computeProps(this.props, defaultProps));
        return computeProps(this.props, defaultProps);

    }

    render() { 
        return(
            <TouchableOpacity
                {...this.prepareRootProps()}  >
                    <Text style={ [ button.buttonText, {color: this.props.style.color ? this.props.style.color : this.getTheme().inverseTextColor }]}>{this.props.children}</Text>
            </TouchableOpacity> 
        );
    }    

}
