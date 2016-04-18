/* @flow */
'use strict';

import React, {Component, Text, View, TouchableOpacity} from 'react-native';
import navbarStyle from './../Styles/navbar.js';
import ButtonGroup from './ButtonGroup';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class Toolbar extends Component {  

    renderLeftComponent() {

        return _.find(this.props.children, function(item) {
            if(item && item.type == ButtonGroup && item.props &&item.props.position=="left") {
                return true;
            }
        });

    }

    renderRightComponent() {

        return _.find(this.props.children, function(item) {
            if(item && item.type == ButtonGroup && item.props && item.props.position=="right") {
                return true;
            }
        });

    }

    renderCenterComponent() {

        return _.filter(this.props.children, function(item) {

            if(item && item.props && item.props.position!="right" && item.props.position!="left")
                return true;
            else
                return false;            
        });

    }

    prepareRootProps() {

        var defaultProps = {
            style: navbarStyle.navbar
        };
        
        console.log("toolbar style:", computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }

    render() {

        return(                
            <View {...this.prepareRootProps()}>
                <View>                    
                    {this.renderLeftComponent()}                    
                </View>                
                <View>
                   {this.renderCenterComponent()}
                </View>
                <View>                    
                    {this.renderRightComponent()}                    
                </View>                
            </View>             
        );
    }
}

