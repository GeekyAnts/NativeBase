/* @flow */
'use strict';

import React, {Switch} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Checkbox from 'react-native-checkbox';

export default class SwitchNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            switch: {}
        }
    }
    prepareRootProps() {

        return this.props;

    }
    
    render() { 
        return(
          <Switch {...this.prepareRootProps()}/>
        );
    }

}
