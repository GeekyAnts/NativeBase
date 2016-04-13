/* @flow */
'use strict';

import React, {View } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';


export default class ViewNSP extends NativeStarterComponent {
    render() {
        return(
            <View {...this.props}></View>
        );
    }    

}

