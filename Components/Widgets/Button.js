/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import button from '../Styles/button';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Button extends NativeStarterComponent {

    prepareRootProps() {

        var type = { backgroundColor: (this.props.primary) ? this.getTheme().primary : 
                       (this.props.secondary) ? this.getTheme().brandSecondary :
                       (this.props.success) ? this.getTheme().success :
                       (this.props.danger) ? this.getTheme().danger :
                       (this.props.warning) ? this.getTheme().warning :
                       (this.props.backgroundColor) ? this.props.backgroundColor :
                       (this.props.transparent) ? 'rgba(0,0,0,0)' :
                       this.getTheme().brandSecondary,
                    borderRadius: (this.props.rounded) ? 23 : 4
        }

        console.log(button.button, type);

        var  addedProps = _.merge(button.button,type);

        var defaultProps = {
            style: addedProps
        }

        console.log("button style", computeProps(this.props, defaultProps));
        return computeProps(this.props, defaultProps);

    }

    renderChild(item) {
      if(item.type == undefined) {
        console.log("undefined ", item);
        return <Text style={this.props.textStyle}>{item}</Text>
      }
      else {
        console.log("defined ", item);
        return item;
      }
    }
    
    render() { 
        return(
            <TouchableOpacity
                {...this.prepareRootProps()}  >
                  
                {this.props.children[0] && 
                  <View>                    
                      {this.renderChild(this.props.children[0])}
                  </View>}
                {this.props.children[1] && 
                  <View>                    
                      {this.renderChild(this.props.children[1])}                    
                  </View>}
                { !Array.isArray(this.props.children) && 
                  <View>                    
                      {this.renderChild(this.props.children)}
                  </View>}
                
            </TouchableOpacity> 
        );
    }

}

