/* @flow */
'use strict';

import React, {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';

export default class CardNB extends NativeBaseComponent {
    
    getInitialStyle() {
        return {
            card: {
                borderWidth: 1,
                borderRadius: 8
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().card
        };

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
