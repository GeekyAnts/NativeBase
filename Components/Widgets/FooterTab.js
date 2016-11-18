/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from './Button';
import { Platform } from 'react-native';
import View from './View';
import Icon from './Icon';
import Badge from './Badge';
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
                margin: 1,
                height: this.getTheme().footerHeight-4,
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
        var childrenArray = React.Children.toArray(this.props.children);
        let length = childrenArray.length;
        var newChildren = [];

        {childrenArray.map((child, i) => {
        	let children = _.clone(child.props.children);
            if (typeof children==='string') {
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
                iconElement = _.remove(children, function(item) {
                    if(item.type == IconNB) {
                        return true;
                    }
                });
                let badgeElement = [];
                badgeElement = _.remove(children, function(item) {
                    if(item.type == Badge) {
                        return true;
                    }
                });
                if (iconElement.length>0) {
                    if (badgeElement.length>0) {
                      newChildren.push(
                        <View key={i} style={{position: 'relative', flex: 1}}>
                          <Button transparent vertical
                              capitalize={false}
                              style={[this.getInitialStyle().btnStyle, {backgroundColor: (child.props.active) ? this.getTheme().tabActiveBgColor : undefined, alignSelf: 'stretch'}]}
                              textStyle={(child.props.active) ? this.getInitialStyle().btnActiveTextStyle : this.getInitialStyle().btnTextStyle}
                              onPress={child.props.onPress}>
                              {children}
                              <Icon
                                  style={{color: (child.props.active) ? this.getTheme().tabBarActiveTextColor : this.getTheme().tabBarTextColor}}
                                  name={iconElement[0].props.name} />
                          </Button>
                          <Badge style={{position: 'absolute', top: 4, right: (length==2) ? 68 : (length==3) ? 36 : (length==4) ? 20 : undefined, height: 18, paddingHorizontal: 6, padding: 1.5, backgroundColor: (badgeElement[0].props.badgeColor) ? badgeElement[0].props.badgeColor : undefined }} textStyle={{fontSize: 11, lineHeight: 14, color: (badgeElement[0].props.textColor) ? badgeElement[0].props.textColor : undefined }}>
                            {badgeElement[0].props.children}
                          </Badge>
                      </View>
                      );
                    }
                    else {
                      newChildren.push(
                          <Button transparent vertical
                              capitalize={false}
                              style={[this.getInitialStyle().btnStyle, {backgroundColor: (child.props.active) ? this.getTheme().tabActiveBgColor : undefined}]}
                              textStyle={(child.props.active) ? this.getInitialStyle().btnActiveTextStyle : this.getInitialStyle().btnTextStyle}
                              key={i} onPress={child.props.onPress}>
                              {children}
                              <Icon
                                  style={{color: (child.props.active) ? this.getTheme().tabBarActiveTextColor : this.getTheme().tabBarTextColor}}
                                  name={iconElement[0].props.name} />
                          </Button>
                      );
                    }
                }
                else {
                    newChildren.push(
                        <Button transparent vertical
                            capitalize={false}
                            style={[this.getInitialStyle().btnStyle, {backgroundColor: (child.props.active) ? this.getTheme().tabActiveBgColor : undefined}]}
                            key={i} onPress={child.props.onPress}>
                            <Icon
                                style={{color: (child.props.active) ? this.getTheme().tabBarActiveTextColor : this.getTheme().tabBarTextColor,
                                        fontSize: 28}}
                                name={children.props.name} />
                        </Button>
                    );
                }
            };
        })}
        return newChildren;
    }

    render() {

        return(
            <View ref={c => this._root = c} {...this.prepareRootProps()} >
                {this.renderFooter()}
            </View>
        );
    }
}
