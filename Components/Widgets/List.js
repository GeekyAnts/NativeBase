/* @flow */
'use strict';

import React, {View, Text} from 'react-native';
import Title from './Title';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class ListNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            list: {

            },
            insetList: {
                borderWidth: 1,
                borderRadius: 8
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.props.inset ? this.getInitialStyle().insetList : this.getInitialStyle().list
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
