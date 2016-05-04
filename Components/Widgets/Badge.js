/* @flow */
'use strict';

import React, {Text} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';


export default class BadgeNB extends NativeBaseComponent {
    
    prepareRootProps() {

        var type = { 
            color: this.getTheme().badgeColor,
            fontSize: this.getTheme().fontSizeBase,
            backgroundColor: this.getTheme().badgeBg,
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

