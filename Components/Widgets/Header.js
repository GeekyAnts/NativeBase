/* @flow */
'use strict';

import React from 'react';
import {View, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Header extends NativeBaseComponent {

    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
                paddingTop: (Platform.OS === 'ios' ) ? 25 : 15,
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

            if (this.props.searchBar) {
                newChildren.push(<View style={{flex: 4,alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                                    {childrenArray[0]}
                                </View>)
                newChildren.push(<View style={{flex:1,alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', marginRight: -14}}>
                                    {childrenArray[1]}
                                </View>)
            }
            else {
                newChildren.push(<View style={{flex: 1,alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -14}}>
                                    {this.props.children[0]}
                                </View>)
                newChildren.push(<View style={{flex: 3, alignSelf: 'center'}}>
                                    {this.props.children[1]}
                                </View>)
                newChildren.push(<View style={{flex:1,alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', marginRight: -14}}>
                                    {this.props.children[2]}
                                </View>)
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
