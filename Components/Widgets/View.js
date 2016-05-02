/* @flow */
'use strict';

import React, {View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';


export default class ViewNB extends NativeBaseComponent {
    static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }

    render() {
        return(
            <View style={{padding: (this.props.padder) ? this.getTheme().contentPadding : 0}} {...this.props}></View>
        );
    }    

}

