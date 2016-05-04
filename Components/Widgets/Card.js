/* @flow */
'use strict';

import React, {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class CardNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            card: {
                flex: 1,
                borderWidth: this.getTheme().borderWidth,
                borderRadius: this.getTheme().borderRadiusBase,
                borderColor: this.getTheme().listBorderColor,
                flexWrap: 'wrap',
                borderBottomWidth: 0,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5
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
