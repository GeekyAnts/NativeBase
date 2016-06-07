/* @flow */
'use strict';

import React from 'react';
import {Text} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class BadgeNB extends NativeBaseComponent {

    prepareRootProps() {

        var type = { 
            color: this.getTheme().badgeColor,
            fontSize: this.getTheme().fontSizeBase,
            backgroundColor: this.props.primary ? this.getTheme().brandPrimary : this.props.success ? this.getTheme().brandSuccess :
            this.props.info ? this.getTheme().brandInfo : this.props.warning ? this.getTheme().brandWarning :
            this.props.danger ? this.getTheme().brandDanger : this.getTheme().badgeBg,              
            padding: 4,
            alignSelf: 'flex-start',
            borderRadius: 13,
            width: 27,
            textAlign: 'center'

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

