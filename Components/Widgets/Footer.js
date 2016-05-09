/* @flow */
'use strict';

import React from 'react';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

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
                <View style={{flex: 1,alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>                     
                    {this.props.children[0]}                    
                </View>}
                
                { Array.isArray(this.props.children) && 
                <View style={{flex: 3, alignSelf: 'center'}}>                    
                    {this.props.children[1]}                    
                </View>}
                
                { Array.isArray(this.props.children) && 
                <View style={{flex:1,alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row'}}>                    
                    {this.props.children[2]}
                </View>}   
            </View> 
        );
    }
}

