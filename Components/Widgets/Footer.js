/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity, Component, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import navbarStyle from './../Styles/navbar.js';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class Footer extends NativeBaseComponent { 
    static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }
    
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

