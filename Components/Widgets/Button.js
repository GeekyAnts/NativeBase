/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import button from '../Styles/button';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Button extends NativeBaseComponent {
    static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }
    
    getInitialStyle() {
        return {
            button: {
                padding: 10,
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignSelf: 'center',
                backgroundColor: this.getTheme().btnPrimaryBg,
            }
        }
    }
    prepareRootProps() {

        var type = { backgroundColor: (this.props.primary) ? this.getTheme().btnPrimaryBg : 
                       ((this.props.transparent) || (this.props.bordered)) ? 'rgba(0,0,0,0)' :
                       (this.props.success) ? this.getTheme().btnSuccessBg :
                       (this.props.danger) ? this.getTheme().btnDangerBg :
                       (this.props.warning) ? this.getTheme().btnWarningBg :
                       (this.props.info) ? this.getTheme().btnInfoBg :
                       (this.props.backgroundColor) ? this.props.backgroundColor :
                       this.getInitialStyle().button.backgroundColor,
                    borderRadius: (this.props.rounded) ? this.getTheme().borderRadiusLarge : this.getTheme().borderRadiusBase,
                    borderWidth: (this.props.bordered) ? 1 : 0,
                    borderColor: (this.props.primary) ? this.getTheme().primary : 
                       (this.props.success) ? this.getTheme().btnSuccessBg :
                       (this.props.danger) ? this.getTheme().btnDangerBg :
                       (this.props.warning) ? this.getTheme().btnWarningBg :
                       (this.props.info) ? this.getTheme().btnInfoBg :
                       this.getInitialStyle().button.backgroundColor,
                    height: (this.props.large) ? 60 : (this.props.small) ? 35 : 45,
                    alignSelf: (this.props.block) ? 'stretch' : 'flex-start',
        }

        var  addedProps = _.merge(this.getInitialStyle().button,type);

        var defaultProps = {
            style: addedProps
        }

        return computeProps(this.props, defaultProps);

    }

    getTextStyle() {
      var mergedStyle = {};

      var btnType = {
        color: ((this.props.bordered) && (this.props.primary)) ? this.getTheme().btnPrimaryBg : 
               ((this.props.bordered) && (this.props.success)) ? this.getTheme().btnSuccessBg :
               ((this.props.bordered) && (this.props.danger)) ? this.getTheme().btnDangerBg :
               ((this.props.bordered) && (this.props.warning)) ? this.getTheme().btnWarningBg :
               ((this.props.bordered) && (this.props.info)) ? this.getTheme().btnInfoBg :
                this.getTheme().inverseTextColor,
        fontSize: (this.props.large) ? this.getTheme().btnTextSizeLarge : (this.props.small) ? this.getTheme().btnTextSizeSmall : this.getTheme().btnTextSize, 
        lineHeight: (this.props.large) ? 32 : (this.props.small) ? 15 : 22
      }

      var  addedBtnProps = _.merge(this.getInitialStyle().buttonText,btnType);
      return _.merge(mergedStyle, addedBtnProps, this.props.textStyle);
    }

    renderChildren() {
      if(typeof this.props.children == undefined || typeof this.props.children == "string") {
        return  <TouchableOpacity {...this.prepareRootProps()}  >
                  <Text style={this.getTextStyle()}>{this.props.children}</Text>
                </TouchableOpacity> 
      }

      else if(Array.isArray(this.props.children)) {
        if(this.props.children[0] && (typeof this.props.children[0] == "string" || this.props.children[0].type == undefined))
          return  <TouchableOpacity {...this.prepareRootProps()}  >
                    <Text style={this.getTextStyle()}>{this.props.children[0]}</Text>
                    <Text>
                      {this.props.children[1]}
                    </Text>
                  </TouchableOpacity> 

        else if(this.props.children[1] && (typeof this.props.children[1] == "string" || this.props.children[1].type == undefined))
          return  <TouchableOpacity {...this.prepareRootProps()}  >
                    <Text>
                      {this.props.children[0]}
                    </Text>
                    <Text style={this.getTextStyle()}>{this.props.children[1]}</Text>
                  </TouchableOpacity> 

        else 
          return  <TouchableOpacity {...this.prepareRootProps()}  >
                    <Text>
                      {this.props.children[0]}
                    </Text>
                    <Text>
                      {this.props.children[1]}
                    </Text>
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
