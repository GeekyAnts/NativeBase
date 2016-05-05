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
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && item.type == Header) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && this.props.children.type == Header) {
				return this.props.children;
			}
		}
	}
	renderContent() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && item.type == Content) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && this.props.children.type == Content) {
				return this.props.children;
			}
		}
	}
	renderFooter() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && item.type == Footer) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && this.props.children.type == Footer) {
				return this.props.children;
			}
		}
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

