/* @flow */
'use strict';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Text from "./Text";


export default class BadgeNB extends NativeBaseComponent {

    prepareRootProps() {

        var type = {

            backgroundColor: this.props.primary ? this.getTheme().brandPrimary : this.props.success ? this.getTheme().brandSuccess :
            this.props.info ? this.getTheme().brandInfo : this.props.warning ? this.getTheme().brandWarning :
            this.props.danger ? this.getTheme().brandDanger : this.getTheme().badgeBg,
            padding: 4,
            alignSelf: 'flex-start',
            borderRadius: 13,
            width: 27,
            height: 27


        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);

    }
    render() {
        return(
            <View {...this.prepareRootProps()}>
                <Text style={{  color: (this.props.textStyle && this.props.textStyle.color) ? this.props.textStyle.color : this.getTheme().badgeColor,
                                fontSize: this.getTheme().fontSizeBase,
                                lineHeight: this.getTheme().lineHeight-2,
                                textAlign: 'center'}}>{this.props.children}
                </Text>
            </View>
        );
    }

}
