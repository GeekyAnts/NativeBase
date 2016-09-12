/* @flow */
'use strict';

import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import IconNB from './Icon';
import Icon from './Icon';
import Text from './Text';
import _ from 'lodash';


export default class Button extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object,
        textStyle : React.PropTypes.object,
        block : React.PropTypes.bool,
        primary : React.PropTypes.bool,
        transparent : React.PropTypes.bool,
        success : React.PropTypes.bool,
        danger : React.PropTypes.bool,
        warning : React.PropTypes.bool,
        info : React.PropTypes.bool,
        bordered : React.PropTypes.bool,
        disabled : React.PropTypes.bool,
        rounded : React.PropTypes.bool,
        large : React.PropTypes.bool,
        small : React.PropTypes.bool,
        inputButton : React.PropTypes.bool
    }

    getInitialStyle() {
        return {
            button: {
                paddingVertical: (this.props.vertical) ? 0 :this.getTheme().buttonPadding,
                paddingHorizontal: (this.props.vertical) ? 5 :this.getTheme().buttonPadding+2,
                justifyContent: (this.props.block) ? 'center' : 'space-around',
                flexDirection:  (this.props.vertical) ? 'column' : 'row',
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: this.getTheme().btnPrimaryBg,
                elevation: (this.props.transparent || this.props.bordered) ? 0 : 3,
                shadowColor: (this.props.transparent || this.props.bordered) ? undefined : '#000',
                shadowOffset: (this.props.transparent || this.props.bordered) ? undefined : {width: 0, height: 2},
                shadowOpacity: (this.props.transparent || this.props.bordered) ? undefined : 0.2,
                shadowRadius: (this.props.transparent || this.props.bordered) ? undefined : 2
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
            height: (this.props.large) ? 60 : (this.props.small) ? 35 : 38,
            alignSelf: (this.props.block) ? 'stretch' : 'flex-start'
        }

        var addedProps = _.merge(this.getInitialStyle().button,type);

        var defaultProps = {
            style: addedProps,
            capitalize: true
        }

        return computeProps(this.props, defaultProps);
    }

    getTextStyle() {

        var mergedStyle = {};
        var btnType = {
            fontFamily: this.getTheme().btnFontFamily,
            marginLeft: (this.props.vertical) ? 0 : (this.iconPresent() && !this.props.iconRight) ? this.getTheme().iconMargin : 0,
            marginRight: (this.iconPresent() && this.props.iconRight) ? this.getTheme().iconMargin : 0,
            color:
                    ((this.props.bordered) && (this.props.primary)) ? this.getTheme().btnPrimaryBg :
                    ((this.props.bordered) && (this.props.success)) ? this.getTheme().btnSuccessBg :
                    ((this.props.bordered) && (this.props.danger)) ? this.getTheme().btnDangerBg :
                    ((this.props.bordered) && (this.props.warning)) ? this.getTheme().btnWarningBg :
                    ((this.props.bordered) && (this.props.info)) ? this.getTheme().btnInfoBg :
                    ((this.props.bordered)) ? this.getTheme().btnPrimaryBg :
                    (this.props.color) ? this.props.color :
                    (this.props.transparent) ? this.getContextForegroundColor() :
                    this.getTheme().inverseTextColor,

            fontSize: (this.props.large) ? this.getTheme().btnTextSizeLarge : (this.props.small) ? this.getTheme().btnTextSizeSmall : this.getTheme().btnTextSize,

            lineHeight: (this.props.large) ? 29 : (this.props.small) ? 16 : this.getTheme().btnLineHeight
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
                (this.props.bordered) ? this.getTheme().btnPrimaryBg :
                (this.props.color) ? this.props.color :
                (this.props.header) ? this.getTheme().toolbarTextColor :
                (this.props.transparent) ? this.getContextForegroundColor() :
                this.getTheme().inverseTextColor,

            fontSize: (this.props.large) ? this.getTheme().iconSizeLarge : (this.props.small) ? this.getTheme().iconSizeSmall : (this.props.inputButton) ? this.getTheme().toolbarIconSize : this.getTheme().iconFontSize-5,
            lineHeight: (this.props.large) ? 52: (this.props.small || this.props.inputButton) ? 22 : this.getTheme().iconLineHeight-9
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
        
        if(typeof this.props.children == 'string') {
            return <Text style={this.getTextStyle()}>{(Platform.OS==='ios' || !this.props.capitalize) ? this.props.children : this.props.children.toUpperCase()}</Text>
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
                if (childrenArray[0].type==undefined) {
                    newChildren.push(<Text key='label' style={this.getTextStyle()}>{(Platform.OS==='ios' || !this.props.capitalize) ? childrenArray[0] : childrenArray[0].toUpperCase()}</Text>);
                } else {
                    newChildren.push(<Text key='label' style={this.getTextStyle()}>{(Platform.OS==='ios' || !this.props.capitalize) ? childrenArray[0].props.children : childrenArray[0].props.children.toUpperCase()}</Text>);
                }

                newChildren.push(<Text key='icon'>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);
            }

            else if(this.props.iconLeft || iconElement.length>0) {
                newChildren.push(<Text key='icon'>{React.cloneElement(iconElement[0], this.getIconProps(iconElement[0]))}</Text>);

                if (childrenArray[0].type==undefined) {
                    newChildren.push(<Text key='label' style={this.getTextStyle()}>{(Platform.OS==='ios' || !this.props.capitalize) ? childrenArray[0] : childrenArray[0].toUpperCase()}</Text>);
                } else {
                    newChildren.push(<Text key='label' style={this.getTextStyle()}>{(Platform.OS==='ios' || !this.props.capitalize) ? childrenArray[0].props.children : childrenArray[0].props.children.toUpperCase()}</Text>);
                }
            }
            else {
                return <Text style={this.getTextStyle()}>{(Platform.OS==='ios') ? this.props.children : this.props.children.toUpperCase()}</Text>
            }

            return newChildren;

        }

        else
            return React.cloneElement(this.props.children);

    }

    render() {
        return(
            <TouchableOpacity {...this.prepareRootProps()} >
                {this.renderChildren()}
            </TouchableOpacity>
        );
    }
}
