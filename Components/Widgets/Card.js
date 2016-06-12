/* @flow */
'use strict';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class CardNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            card: {
                flex: 1,
                borderWidth: this.getTheme().borderWidth,
                borderRadius: this.getTheme().borderRadiusBase,
                borderColor: this.getTheme().listBorderColor,
                flexWrap: 'wrap',
                borderBottomWidth: 0,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                elevation: 1
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().card
        };

        return computeProps(this.props, defaultProps);

    }

    setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }

    render() {
        return(
            <View ref={component => this._root = component} {...this.prepareRootProps()} >
                {this.props.children}
            </View>
        );
    }

}
