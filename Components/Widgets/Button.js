/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import button from '../Styles/button';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Button extends NativeStarterComponent {

    getInitialStyle() {
      return {
        button: {
            padding: 10,
            borderColor: 'transparent',
          height: 45,
          marginTop: 15,
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginLeft: 10,
          marginRight: 10,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          backgroundColor: "red",
          borderRadius: 4
        },
        buttonText: {
          fontSize: 18,
          flex: 1,
          color: '#fff'
        }
      }
    }

    prepareRootProps() {

        var type = { backgroundColor: (this.props.primary) ? this.getTheme().primary : 
                       (this.props.secondary) ? this.getTheme().brandSecondary :
                       (this.props.success) ? this.getTheme().success :
                       (this.props.danger) ? this.getTheme().danger :
                       (this.props.warning) ? this.getTheme().warning :
                       (this.props.backgroundColor) ? this.props.backgroundColor :
                       (this.props.transparent) ? 'rgba(0,0,0,0)' :
                       this.getInitialStyle().button.backgroundColor,
                    borderRadius: (this.props.rounded) ? 23 : 4
        }

        console.log(button.button, type);

        var  addedProps = _.merge(this.getInitialStyle().button,type);

        var defaultProps = {
            style: addedProps
        }

        console.log("button style", computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }

    getTextStyle() {
      var mergedStyle = {};
      return _.merge(mergedStyle, this.getInitialStyle().buttonText, this.props.textStyle);
    }

    renderChildren() {
      if(typeof this.props.children == undefined || typeof this.props.children == "string") {
        console.log(this.props.children);
        return  <TouchableOpacity {...this.prepareRootProps()}  >
                  <Text style={this.getTextStyle()}>{this.props.children}</Text>
                </TouchableOpacity> 
      }

      else if(Array.isArray(this.props.children)) {
        console.log(this.props.children[0].type, this.props.children[1].type);
        if(this.props.children[0] && this.props.children[0].type == undefined || typeof this.props.children == "string")
          return  <TouchableOpacity {...this.prepareRootProps()}  >
                    <Text style={this.getTextStyle()}>{this.props.children[0]}</Text>
                    <View>
                      {this.props.children[1]}
                    </View>
                  </TouchableOpacity> 

        else if(this.props.children[1] && this.props.children[1].type == undefined || typeof this.props.children == "string")
          return  <TouchableOpacity {...this.prepareRootProps()}  >
                    <View>
                      {this.props.children[0]}
                    </View>
                    <Text style={this.getTextStyle()}>{this.props.children[1]}</Text>
                  </TouchableOpacity> 

        else 
          return  <TouchableOpacity {...this.prepareRootProps()}  >
                    <View>
                      {this.props.children[0]}
                    </View>
                    <View>
                      {this.props.children[1]}
                    </View>
                  </TouchableOpacity> 
      }

      else
        return  <TouchableOpacity {...this.prepareRootProps()}  >
                  {this.props.children}
                </TouchableOpacity>
    }
    
    render() { 
        return(this.renderChildren());
    }

}

