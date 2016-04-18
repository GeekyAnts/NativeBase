/* @flow */
'use strict';

import React, {Component, Text, View, TouchableOpacity} from 'react-native';
import navbarStyle from './../Styles/navbar.js';
import {Actions} from 'react-native-router-flux';
import ButtonGroup from './ButtonGroup';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class Toolbar extends Component {  

    prepareRootProps() {

        var defaultProps = {
            style: navbarStyle.navbar
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

