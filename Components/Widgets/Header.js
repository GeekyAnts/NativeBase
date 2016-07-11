/* @flow */
'use strict';

import React from 'react';
import {View, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from "./Button";
import Title from "./Title";
import InputGroup from "./InputGroup";
import Subtitle from "./Subtitle";
import _ from 'lodash';

export default class Header extends NativeBaseComponent {

    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingTop: (Platform.OS === 'ios' ) ? 15 : 0,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                height: this.getTheme().toolbarHeight,
                elevation: 2
            },
            iosToolbarSearch: {
                backgroundColor: this.getTheme().toolbarInputColor,
                borderRadius: this.props.rounded ? 25 : 2,
                height: 30,
                borderColor: 'transparent'
            },
            androidToolbarSearch: {
                backgroundColor: "#fff",
                borderRadius: 2,
                borderColor: 'transparent',
                elevation: 2
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().navbar
        };

        return computeProps(this.props, defaultProps);

    }
    renderChildren() {
        if(!Array.isArray(this.props.children)) {
            return this.props.children;
        }

        else if (Array.isArray(this.props.children)) {
            var newChildren = [];
            var childrenArray = React.Children.toArray(this.props.children);

            var buttons = [];
            buttons = _.remove(childrenArray, function(item) {
                if(item.type == Button) {
                    return true;
                }
            });

            var title = [];
            title = _.remove(childrenArray, function(item) {
                if(item.type == Title) {
                    return true;
                }
            });

            var subtitle = [];
            subtitle = _.remove(childrenArray, function(item) {
                if(item.type == Subtitle) {
                    return true;
                }
            });

            var input = [];
            input = _.remove(childrenArray, function(item) {
                if(item.type == InputGroup) {
                    return true;
                }
            });


            if (this.props.searchBar) {
                if (Platform.OS === 'ios') {
                    newChildren.push(<View key='search' style={{flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -7}}>
                                        {React.cloneElement(input[0],{style: this.getInitialStyle().iosToolbarSearch, toolbar : true, key : 'inp'})}
                                    </View>)
                    newChildren.push(<View key='searchBtn' style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: -14}}>
                                        {React.cloneElement(buttons[0], {color: this.getTheme().iosToolbarBtnColor})}
                                    </View>)
                } else {
                    newChildren.push(<View key='search' style={{flex: 1,alignItems: 'center', paddingBottom: 4, justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -8, marginRight: -8}}>
                                        {React.cloneElement(input[0],{style: this.getInitialStyle().androidToolbarSearch, atoolbar : true})}
                                    </View>)
                }
            }
            else {
                if (Platform.OS === 'ios') {
                    newChildren.push(<View key='btn1' style={{alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -14}}>
                                        {React.cloneElement(buttons[0], {color: this.getTheme().iosToolbarBtnColor})}
                                    </View>)
                    newChildren.push(<View key='title' style={{flex: 3, alignSelf: 'center', justifyContent: 'space-between'}}>
                                        {[title[0],subtitle[0]]}
                                    </View>)
                    for (let i = 1; i < buttons.length; i++) {
                        newChildren.push(<View key={'btn' + (i+1)} style={{alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -14}}>
                                            {React.cloneElement(buttons[i], {color: this.getTheme().iosToolbarBtnColor})}
                                        </View>)
                    }
                } else {
                    newChildren.push(<View key='btn1' style={{alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -10, marginRight: 12}}>
                                        {buttons[0]}
                                    </View>)
                    newChildren.push(<View key='title' style={{flex: 3, alignSelf: 'stretch', justifyContent: 'center'}}>
                                        {[title[0]]}
                                    </View>)
                    for (let i = 1; i < buttons.length; i++) {
                        newChildren.push(<View key={'btn' + (i+1)} style={{alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -7}}>
                                            {buttons[i]}
                                        </View>)

                    }
                }

            }
          return newChildren;
        }
    }

    render() {
        return(
            <View {...this.prepareRootProps()} >
                {this.renderChildren()}
            </View>
        );
    }
}
