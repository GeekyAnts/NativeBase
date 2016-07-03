/* @flow */
'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import IconNB from './Icon';
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
                backgroundColor: this.getTheme().btnPrimaryBg,
                elevation: (this.props.transparent) ? 0 : 2,
                shadowColor: (this.props.transparent) ? undefined : '#000',
                shadowOffset: (this.props.transparent) ? undefined : {width: 0, height: 2},
                shadowOpacity: (this.props.transparent) ? undefined : 0.1,
                shadowRadius: (this.props.transparent) ? undefined : 1.5
            }
        }
    }

    prepareRootProps() {

        var type = {
            backgroundColor:    (this.props.primary) ? this.getTheme().btnPrimaryBg :
                                ((this.props.transparent) || (this.props.bordered)) ? 'rgba(0,0,0,0)' :
                                (this.props.success) ? this.getTheme().btnSuccessBg :
                                (this.props.danger) ? this.getTheme().btnDangerBg :
                                (this.props.warning) ? this.getTheme().btnWarningBg :
                                (this.props.info) ? this.getTheme().btnInfoBg :
                                (this.props.backgroundColor) ? this.props.backgroundColor :
                                (this.props.disabled) ? this.getTheme().btnDisabledBg :
                                this.getInitialStyle().button.backgroundColor,
            borderRadius: (this.props.rounded) ? this.getTheme().borderRadiusLarge : this.getTheme().borderRadiusBase,
            borderWidth: (this.props.bordered) ? 1 : 0,
            borderColor:    (this.props.primary) ? this.getTheme().primary :
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

    getTextStyle() {

        var mergedStyle = {};
        var btnType = {
            paddingRight : 5,
            paddingLeft : 3,
            marginLeft: (this.iconPresent() && !this.props.iconRight) ? this.getTheme().iconMargin : 0,
            color:
                    ((this.props.bordered) && (this.props.primary)) ? this.getTheme().btnPrimaryBg :
                    ((this.props.bordered) && (this.props.success)) ? this.getTheme().btnSuccessBg :
                    ((this.props.bordered) && (this.props.danger)) ? this.getTheme().btnDangerBg :
                    ((this.props.bordered) && (this.props.warning)) ? this.getTheme().btnWarningBg :
                    ((this.props.bordered) && (this.props.info)) ? this.getTheme().btnInfoBg :
                    ((this.props.bordered)) ? this.getTheme().btnPrimaryBg :
                    (this.props.transparent) ? this.getContextForegroundColor() :
                    this.getTheme().inverseTextColor,

            fontSize: (this.props.large) ? this.getTheme().btnTextSizeLarge : (this.props.small) ? this.getTheme().btnTextSizeSmall : this.getTheme().btnTextSize,

            lineHeight: (this.props.large) ? 29 : (this.props.small) ? 16 : 20
        }

        return _.merge(mergedStyle, btnType, this.props.textStyle);
    }

    getIconProps(icon) {

        var defaultStyle = {
            color:
                ((this.props.bordered) && (this.props.primary)) ? this.getTheme().btnPrimaryBg :
                ((this.props.bordered) && (this.props.success)) ? this.getTheme().btnSuccessBg :
                ((this.props.bordered) && (this.props.danger)) ? this.getTheme().btnDangerBg :
                ((this.props.bordered) && (this.props.warning)) ? this.getTheme().btnWarningBg :
                ((this.props.bordered) && (this.props.info)) ? this.getTheme().btnInfoBg :
                (this.props.bordered)  ? this.getTheme().btnPrimaryBg :
                (this.props.transparent) ? this.getContextForegroundColor() :
                this.getTheme().inverseTextColor,

            fontSize: (this.props.large) ? this.getTheme().iconSizeLarge : (this.props.small) ? this.getTheme().iconSizeSmall : this.getTheme().iconFontSize,
            lineHeight: (this.props.large) ? 48: (this.props.small) ? 22 : 32
        }

        var defaultProps = {
            style: defaultStyle
        }

        return computeProps(icon.props, defaultProps);
    }
    iconPresent() {
        var iconComponentPresent = false;
        React.Children.forEach(this.props.children, function (child) {
            if(child.type == Icon)
                iconComponentPresent = true;
        })
        return iconComponentPresent;
    }
    renderChildren() {
        if(typeof this.props.children == "string") {
            return <Text style={this.getTextStyle()}>{this.props.children}</Text>
        }

        else if(this.props.children.type == IconNB) {
            return React.cloneElement(this.props.children, this.getIconProps(this.props.children));
        }

        else if(Array.isArray(this.props.children)) {
            var newChildren = [];

            var childrenArray = React.Children.toArray(this.props.children);

            var iconElement = [];
            iconElement = _.remove(childrenArray, function(item) {
                if(item.type == IconNB) {
                    return true;
                }
            });
            if(this.props.iconRight) {
                newChildren.push(<Text key='label' style={this.getTextStyle()}>{childrenArray[0]}</Text>);
                newChildren.push(<Text key='icon'>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);
            }

            else if(this.props.iconLeft || iconElement) {
                newChildren.push(<Text key='icon'>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);
                newChildren.push(<Text key='label' style={this.getTextStyle()}>{childrenArray[0]}</Text>);
            }

            return newChildren;

        }

        else
            return React.cloneElement(this.props.children);

    }

    render() {
        return(
            <TouchableOpacity {...this.prepareRootProps()}  >
                {this.renderChildren()}
            </TouchableOpacity>
        );
    }
}
