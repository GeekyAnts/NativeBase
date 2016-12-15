/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from './Button';
import { Platform, Animated, Dimensions } from 'react-native';
import View from './View';
import Icon from './Icon';
import Badge from './Badge';
import IconNB from './Icon';
import Text from './Text';
import _ from 'lodash';

const { height, width } = Dimensions.get('window');

export default class Footer extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    state = {
      length: undefined,
      activeIndex: undefined
    }

    getInitialStyle() {
        return {
            tab: {
                flexDirection: 'row',
                elevation: 2,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                backgroundColor: this.getTheme().tabDefaultBg,
                shadowRadius: 1.5,
                position: 'relative'
            },
            button: {
                flex: 1,
                borderRadius: 0,
                height: this.checkIconPresent() ? 63 : 45,
                justifyContent: 'center',
                shadowColor: 'transparent',
                shadowOffset: undefined,
                shadowOpacity: 0,
                shadowRadius: 0,
                borderColor: this.getTheme().topTabBarBorderColor
            },
            textStyle: {
                color: this.getTheme().topTabBarTextColor,
                lineHeight: (Platform.OS == 'ios') ? 17 : undefined
            },
            activeTextStyle: {
                fontWeight: '600',
                color: this.getTheme().topTabBarActiveTextColor,
                lineHeight: (Platform.OS == 'ios') ? 16 : undefined
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().tab
        };

        return computeProps(this.props, defaultProps);

    }

    componentDidMount() {
          let childrenArray = React.Children.toArray(this.props.children);
          let length = childrenArray.length;
          this.setState({
            length: length
          });
          this.getWidth();
    }

    checkIconPresent() {
        let icon = false;
        React.Children.forEach(this.props.children, function (child) {
            if(typeof child.props.children == 'object')
                icon = true;
        })
        return icon;
    }

    getWidth() {
      let childrenArray = React.Children.toArray(this.props.children);
      let activeIndex = _.findIndex(childrenArray, (child) => child.props.active);
      this.setState({
          activeIndex : activeIndex
      });


    }

    renderTab() {
        let childrenArray = React.Children.toArray(this.props.children);
        let length = childrenArray.length;
        let newChildren = [];

        {childrenArray.map((child, i) => {
              newChildren.push(React.cloneElement(child, {
                  style: [this.getInitialStyle().button, {borderBottomWidth: (child.props.active) ? 3 : 0}],
                  capitalize: true,
                  transparent:true,
                  tabButton: true,
                  activeTabButton: (child.props.active) ? true : false,
                  vertical:true,
                  textStyle: (child.props.active) ? this.getInitialStyle().activeTextStyle : this.getInitialStyle().textStyle,
                  key: i}));
            }
        )}
        return newChildren;
    }

    render() {
        return(
            <View ref={c => this._root = c} {...this.prepareRootProps()}>
                {this.renderTab()}
            </View>
        );
    }
}
