/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import button from '../Styles/button';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';



export default class Button extends NativeStarterComponent {

    prepareRootProps() {

        var type = { backgroundColor: (this.props.primary) ? this.getTheme().primary : 
                       (this.props.secondary) ? this.getTheme().secondary :
                       (this.props.success) ? this.getTheme().success :
                       (this.props.danger) ? this.getTheme().danger :
                       (this.props.warning) ? this.getTheme().warning :
                       (this.props.backgroundColor) ? this.props.backgroundColor :
                       this.getTheme().secondary,
                    borderRadius: (this.props.rounded) ? 23 : 4
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
                    <Text style={ [ button.buttonText, {color: this.props.style.color ? this.props.style.color : '#000' }]}>{this.props.children}</Text>
            </TouchableOpacity> 
        );
    }    

}

