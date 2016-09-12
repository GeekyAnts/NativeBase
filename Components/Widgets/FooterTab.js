/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from './Button';
import { Platform } from 'react-native';
import View from './View';
import Icon from './Icon';
import IconNB from './Icon';
import Text from './Text';

export default class Footer extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    getInitialStyle() {
        return {
            footerTab: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
                alignSelf: 'stretch'
            },
            btnTextStyle: {
                color: this.getTheme().tabBarTextColor,
                fontSize: (Platform.OS=='ios') ? 12.5 : 10,
                lineHeight: 13
            },
            btnActiveTextStyle: {
                color: this.getTheme().tabBarActiveTextColor,
                fontSize: (Platform.OS=='ios') ? 12.5 : 11,
                lineHeight: 13
            },
            btnStringTextStyle: {
                color: this.getTheme().tabBarTextColor,
                fontSize: (Platform.OS=='ios') ? 14 : 11,
                lineHeight: 16
            },
            btnStringActiveTextStyle: {
                color: this.getTheme().tabBarActiveTextColor,
                fontSize: (Platform.OS=='ios') ? 14 : 12,
                lineHeight: 16
            },
            btnStyle: {
                alignSelf: 'center',
                flex: 1,
                justifyContent: 'center',
                margin: 3,
                height: this.getTheme().footerHeight-8,
                borderRadius: (Platform.OS == 'ios') ? 7 : 0
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().footerTab
        };

        return computeProps(this.props, defaultProps);

    }

    renderFooter() {
        // console.log('this.props.children', this.props.children);
        var childrenArray = React.Children.toArray(this.props.children);
        var newChildren = [];

        {childrenArray.map((child, i) => {
            if (typeof child.props.children==='string') {
                newChildren.push(React.cloneElement(child, {
                    style: [this.getInitialStyle().btnStyle, {backgroundColor: (child.props.active) ? this.getTheme().tabActiveBgColor : undefined }],
                    vertical: true,
                    capitalize: false,
                    transparent:true,
                    textStyle: (child.props.active) ? this.getInitialStyle().btnStringActiveTextStyle : this.getInitialStyle().btnStringTextStyle,
                    key: i}));
            }
            else {
                let iconElement = [];
                iconElement = _.remove(child.props.children, function(item) {
                    if(item.type == IconNB) {
                        return true;
                    }
                });
                if (iconElement.length>0) {
                    newChildren.push(
                        <Button transparent vertical
                            capitalize={false}
                            style={[this.getInitialStyle().btnStyle, {backgroundColor: (child.props.active) ? this.getTheme().tabActiveBgColor : undefined}]}
                            textStyle={(child.props.active) ? this.getInitialStyle().btnActiveTextStyle : this.getInitialStyle().btnTextStyle}
                            key={i}>
                            {child.props.children}
                            <Icon
                                style={{color: (child.props.active) ? this.getTheme().tabBarActiveTextColor : this.getTheme().tabBarTextColor}}
                                name={iconElement[0].props.name} />
                        </Button>
                    );
                }
                else {
                    newChildren.push(
                        <Button transparent vertical
                            capitalize={false}
                            style={[this.getInitialStyle().btnStyle, {backgroundColor: (child.props.active) ? this.getTheme().tabActiveBgColor : undefined}]}
                            key={i}>
                            <Icon
                                style={{color: (child.props.active) ? this.getTheme().tabBarActiveTextColor : this.getTheme().tabBarTextColor,
                                        fontSize: 28}}
                                name={child.props.children.props.name} />
                        </Button>
                    );
                }
            };
        })}
        return newChildren;
    }

    render() {

        return(
            <View {...this.prepareRootProps()} >
                {this.renderFooter()}
            </View>
        );
    }
}
