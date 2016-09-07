/* @flow */
'use strict';

import React from 'react';
import Text from './Text';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class H2NB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    prepareRootProps() {

        var type = {
            color: this.getTheme().textColor,
            fontSize: this.getTheme().fontSizeH2,
            lineHeight: this.getTheme().lineHeightH2
        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);
    }
    render() {
        return(
            <Text {...this.prepareRootProps()}>{this.props.children}</Text>
        );
    }

}
