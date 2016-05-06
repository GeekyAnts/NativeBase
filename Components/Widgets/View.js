/* @flow */
'use strict';

import React, {View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';


export default class ViewNB extends NativeBaseComponent {
    prepareRootProps() {

        var type = { 
        }
      
        var defaultProps = {
            style: type
        }	  
      
        return computeProps(this.props, defaultProps);

    }
    render() {
        return(
            <View style={{padding: (this.props.padder) ? this.getTheme().contentPadding : 0}} {...this.props}></View>
        );
    }    

}

