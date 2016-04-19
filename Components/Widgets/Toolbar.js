/* @flow */
'use strict';

import React, { Text, View, TouchableOpacity, Component} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import navbarStyle from './../Styles/navbar.js';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class Toolbar extends Component { 
    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: "red",
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 15,    
                paddingTop: 25, 
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                height: 65
            },
            title : {
                color: '#fff',
                fontSize: 20,
                fontWeight: "500",
                alignSelf: 'center'
            },
            subtitle : {
                color: '#fff',
                fontSize: 16,
                alignSelf: 'center'
            }
        }
    } 

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().navbar
        };
        console.log(this.props.children);
        
        console.log("toolbar style:", computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }

    render() {

        return(                
            <View {...this.prepareRootProps()}>
                {this.props.children[0] && 
                  <View>                    
                      {this.props.children[0]}                    
                  </View>}
                {this.props.children[1] && 
                  <View>                    
                      {this.props.children[1]}                    
                  </View>}
                {this.props.children[2] && 
                  <View>                    
                      {this.props.children[2]}                    
                  </View>}
                { !Array.isArray(this.props.children) && 
                  <View>                    
                      {this.props.children}
                  </View>}
            </View>             
        );
    }
}

