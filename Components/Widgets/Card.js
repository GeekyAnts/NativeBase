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
                backgroundColor: this.props.transparent? 'transparent' : this.getTheme().cardDefaultBg,
                shadowColor: this.props.transparent ? undefined : '#000',
                shadowOffset: this.props.transparent ? undefined : {width: 0, height: 2},
                shadowOpacity: this.props.transparent ? undefined : 0.1,
                shadowRadius: this.props.transparent ? undefined : 1.5,
                elevation: this.props.transparent ? undefined : 1
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().card
        };
        // console.log("final style object", computeProps(this.props, defaultProps));
        var computedStyle = computeProps(this.props, defaultProps).style.backgroundColor;
        console.log("computedStyle", computedStyle);
        return computeProps(this.props, defaultProps);

    }

    render() {
        return(
            <View {...this.prepareRootProps()} >
                {this.props.children}
            </View>
        );
    }

}
