/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity, Component, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';

export default class Footer extends NativeBaseComponent { 
    
    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15, 
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                height: this.getTheme().footerHeight
            }
        }
    } 

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().navbar
        };

        return computeProps(this.props, defaultProps);

    }

    render() {

        return(                
            <View {...this.prepareRootProps()}>
                { !Array.isArray(this.props.children) && 
                  <View >                    
                      {this.props.children}
                  </View>}

                { Array.isArray(this.props.children) && 
                  <View style={{flex:1}}>                    
                      {this.props.children[0]}                    
                  </View>}
                { Array.isArray(this.props.children) && 
                  <View style={{flex:5}}>                    
                      {this.props.children[1]}                    
                  </View>}
                { Array.isArray(this.props.children) && 
                  <View style={{flex:1}}>                    
                      {this.props.children[2]}
                  </View>}
                
            </View>             
        );
    }
}

