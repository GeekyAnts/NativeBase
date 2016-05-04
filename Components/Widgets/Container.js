/* @flow */
'use strict';

import React, {View } from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';

export default class Container extends NativeBaseComponent {
	
	renderHeader() {
      	console.log(this.context.theme);
      	return _.find(this.props.children, function(item) {
            if(item && item.type == Header) {
                return true;
            }
        });
    }
    renderContent() {
      	return _.find(this.props.children, function(item) {
            if(item && item.type == Content) {
                return true;
            }
        });
    }
    renderFooter() {
      	return _.find(this.props.children, function(item) {
            if(item && item.type == Footer) {
                return true;
            }
        });
    }
    render() {
        	return(
        		<View style={{flex:1}}>
                
					<View>                    
						{this.renderHeader()}
					</View>


					<View style={{flex:1}}>                    
						{this.renderContent()}
					</View>

					<View>                    
						{this.renderFooter()}
					</View>
                
                </View>     
        		);
      
    }    

}

