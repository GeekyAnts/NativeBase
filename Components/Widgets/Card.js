/* @flow */
'use strict';

import React, {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class CardNB extends NativeBaseComponent {
    static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }
    
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
