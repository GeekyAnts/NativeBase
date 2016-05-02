/* @flow */
'use strict';

import React from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IconNB extends NativeBaseComponent {
    static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }
    
    getInitialStyle() {
        return {
            icon: {
                fontSize: 27,
                color: 'white'
            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().icon
        };

        console.log(computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }
    
    render() { 
        return(
          <Icon {...this.prepareRootProps()}/>
        );
    }

}
