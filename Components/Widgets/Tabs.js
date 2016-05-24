/* @flow */
'use strict';

import React from 'react';
import {View, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import ScrollableTabView from './../vendor/react-native-scrollable-tab-view';

export default class TabNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            tab: {
                flex: 1,
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().tab
        };

        return computeProps(this.props, defaultProps);

    }

    render() {
        return(
          <ScrollableTabView {...this.prepareRootProps()} >
              {this.props.children}
          </ScrollableTabView>
        );
    }

}
