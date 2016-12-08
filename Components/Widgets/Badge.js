/* @flow */
'use strict';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Text from './Text';


export default class BadgeNB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    prepareRootProps() {

        var type = {
            backgroundColor:this.props.primary ?
                            this.getTheme().brandPrimary :
                            this.props.success ?
                            this.getTheme().brandSuccess :
                            this.props.info ?
                            this.getTheme().brandInfo :
                            this.props.warning ?
                            this.getTheme().brandWarning :
                            this.props.danger ?
                            this.getTheme().brandDanger :
                            this.getTheme().badgeBg,
            paddingVertical: 2,
            paddingHorizontal: (this.props.textStyle && this.props.textStyle.lineHeight) ? this.props.textStyle.lineHeight / 2 + 3 : 13.5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: (this.props.textStyle && this.props.textStyle.lineHeight) ? this.props.textStyle.lineHeight / 2 + 3: 13.5,
            height: (this.props.textStyle && this.props.textStyle.lineHeight) ? this.props.textStyle.lineHeight + 6 : 27
        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);

    }
    render() {
        return(
            <View ref={c => this._root = c} {...this.prepareRootProps()}>
                <Text style={[ this.props.textStyle,
					         { color: (this.props.textStyle && this.props.textStyle.color) ? this.props.textStyle.color : this.getTheme().badgeColor,
                               fontSize: (this.props.textStyle && this.props.textStyle.fontSize) ? this.props.textStyle.fontSize : this.getTheme().fontSizeBase
                             }]}>{this.props.children}
                </Text>
            </View>
        );
    }

}
