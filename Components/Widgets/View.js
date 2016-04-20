/* @flow */
'use strict';

import React, {View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';


export default class ViewNB extends NativeBaseComponent {
    render() {
        return(
            <View {...this.props}></View>
        );
    }    

}

