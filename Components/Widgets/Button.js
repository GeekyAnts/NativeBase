/* @flow */
'use strict';

import React, { Text, TouchableOpacity } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Icon from './Icon';
import _ from 'lodash';


export default class Button extends NativeBaseComponent {
    
    getInitialStyle() {
        return {
            button: {
                padding: 15,
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: this.getTheme().btnPrimaryBg
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
                    alignSelf: (this.props.block) ? 'stretch' : 'flex-start'
        }

        var  addedProps = _.merge(this.getInitialStyle().button,type);

        var defaultProps = {
            style: addedProps
        }

        return computeProps(this.props, defaultProps);

    }

    isIconLeft() {
        var isIconLeft = false;
        if (this.props['icon-left']) {
            var isIconLeft = true;
        }
        return isIconLeft;
    }

    isIconRight() {
        var isIconRight = false;
        if (this.props['icon-right']) {
            var isIconRight = true;
        }
        return isIconRight;
    }

    getTextStyle() {
      var mergedStyle = {};

      var btnType = {
        paddingLeft: 3,
        color: (((this.props.bordered) && (this.props.primary)) || ((this.props.transparent) && (this.props.primary))) ? this.getTheme().btnPrimaryBg : 
               (((this.props.bordered) && (this.props.success)) || ((this.props.transparent) && (this.props.success))) ? this.getTheme().btnSuccessBg :
               (((this.props.bordered) && (this.props.danger)) || ((this.props.transparent) && (this.props.danger))) ? this.getTheme().btnDangerBg :
               (((this.props.bordered) && (this.props.warning)) || ((this.props.transparent) && (this.props.warning))) ? this.getTheme().btnWarningBg :
               (((this.props.bordered) && (this.props.info)) || ((this.props.transparent) && (this.props.info))) ? this.getTheme().btnInfoBg :
               ((this.props.bordered) || (this.props.transparent)) ? this.getTheme().btnPrimaryBg : 
                this.getTheme().inverseTextColor,
        fontSize: (this.props.large) ? this.getTheme().btnTextSizeLarge : (this.props.small) ? this.getTheme().btnTextSizeSmall : this.getTheme().btnTextSize, 
        lineHeight: (this.props.large) ? 32 : (this.props.small) ? 15 : 22
      }

      return _.merge(mergedStyle, btnType, this.props.textStyle);
    }

    getIconProps(icon) {
        var defaultStyle = {

            color: (((this.props.bordered) && (this.props.primary)) || ((this.props.transparent) && (this.props.primary))) ? this.getTheme().btnPrimaryBg : 
               (((this.props.bordered) && (this.props.success)) || ((this.props.transparent) && (this.props.success))) ? this.getTheme().btnSuccessBg :
               (((this.props.bordered) && (this.props.danger)) || ((this.props.transparent) && (this.props.danger))) ? this.getTheme().btnDangerBg :
               (((this.props.bordered) && (this.props.warning)) || ((this.props.transparent) && (this.props.warning))) ? this.getTheme().btnWarningBg :
               (((this.props.bordered) && (this.props.info)) || ((this.props.transparent) && (this.props.info))) ? this.getTheme().btnInfoBg :
               ((this.props.bordered) || (this.props.transparent)) ? this.getTheme().btnPrimaryBg : 
                this.getTheme().inverseTextColor,
            fontSize: (this.props.large) ? this.getTheme().iconSizeLarge : (this.props.small) ? this.getTheme().iconSizeSmall : this.getTheme().iconFontSize, 
        }

        console.log(this.props.small);

        console.log(defaultStyle, "(*(&GHAGw");

        var defaultProps = {
            style: defaultStyle
        }

        return computeProps(icon.props, defaultProps);
    }

    renderChildren() {

        if(typeof this.props.children == "string") {
            return <Text style={this.getTextStyle()}>{this.props.children}</Text>
        }

        else if(Array.isArray(this.props.children)) {
            var newChildren = [];

            var childrenArray = React.Children.toArray(this.props.children);

            var iconElement = [];
            iconElement = _.remove(childrenArray, function(item) {
                                        if(item.type == Icon) {
                                            return true;
                                        }  
                                    });
            if(this.isIconRight()) {
                newChildren.push(<Text style={this.getTextStyle()}>{childrenArray[0]}</Text>);
                newChildren.push(<Text>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);
            }
            
            else if(this.isIconLeft() || iconElement) {
                newChildren.push(<Text>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);
                newChildren.push(<Text style={this.getTextStyle()}>{childrenArray[0]}</Text>);
            }

            return newChildren;

        }

        else
            return this.props.children
                    
    }
    
    render() { 
        return(
            <TouchableOpacity {...this.prepareRootProps()} >
                {this.renderChildren()}
            </TouchableOpacity>
        );
    }

}
