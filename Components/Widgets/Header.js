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

export default class Header extends NativeBaseComponent {

    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                paddingBottom: 7,
                paddingTop: (Platform.OS === 'ios' ) ? 30 : 15,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                height: this.getTheme().toolbarHeight
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
                newChildren.push(<View style={{flex: 4,alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                                    {input[0]}
                                </View>)
                newChildren.push(<View style={{flex:1,alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', marginRight: -14}}>
                                    {buttons[0]}
                                </View>)
            }
            else {
                if (Platform.OS === 'ios') {
                    newChildren.push(<View style={{flex: 1, paddingBottom: 8, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -14}}>
                                        {React.cloneElement(buttons[0], {color: this.getTheme().iosToolbarBtnColor})}
                                    </View>)
                    newChildren.push(<View style={{flex: 3, alignSelf: 'center', justifyContent: 'space-between'}}>
                                        {[title[0],subtitle[0]]}
                                    </View>)
                    for (let i = 1; i < buttons.length; i++) {
                        newChildren.push(<View style={{alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -14, paddingBottom: 8}}>
                                            {React.cloneElement(buttons[i], {color: this.getTheme().iosToolbarBtnColor})}
                                        </View>)
                    }
                } else {
                    newChildren.push(<View style={{alignItems: 'center', paddingBottom: 8, justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -10, marginRight: 12}}>
                                        {buttons[0]}
                                    </View>)
                    newChildren.push(<View style={{flex: 3, alignSelf: 'stretch'}}>
                                        {[title[0]]}
                                    </View>)
                    for (let i = 1; i < buttons.length; i++) {
                        newChildren.push(<View style={{alignItems: 'center', paddingBottom: 8, justifyContent: 'flex-start', flexDirection: 'row', marginRight: -7}}>
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
