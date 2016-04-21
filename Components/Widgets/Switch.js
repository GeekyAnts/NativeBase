/* @flow */
'use strict';

import React, {Switch} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class SwitchNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            switch: {
                
            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().switch
        };

        console.log(computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }
    
    render() { 
        return(
          <Switch {...this.prepareRootProps()}/>
        );
    }

}
