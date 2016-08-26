/* @flow */
'use strict';

import React from 'react';
import {View, Image} from 'react-native';
import ViewNB from './View';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class Container extends NativeBaseComponent {

	propTypes: {
		style : React.PropTypes.object
	}

	checkRoleComponent(item, role) {
		return item.props && item.props.role && item.props.role == role;
	}

	renderHeader() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && (item.type == Header || this.checkRoleComponent(item, 'header'))) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Header || this.checkRoleComponent(this.props.children, 'header'))) {
				return this.props.children;
			}
		}
	}
	renderContent() {
		if(Array.isArray(this.props.children)) {

			return _.filter(this.props.children, function(item) {
				if(item && (item.type == ViewNB || item.type == Content || item.type == Image || item.type == View)) {

					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Content || this.props.children.type == ViewNB || this.props.children.type == View || this.props.children.type == Image)) {
				return this.props.children;
			}
		}
	}
	renderFooter() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && (item.type == Footer || this.checkRoleComponent(item, 'footer'))) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Footer || this.checkRoleComponent(this.props.children, 'footer'))) {
				return this.props.children;
			}
		}
	}
	prepareRootProps() {

		var type = {
			flex: 1
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);
	}
	render() {
		return(
			<View {...this.prepareRootProps()}>

				{this.renderHeader()}

				{this.renderContent()}

				{this.renderFooter()}

			</View>
		);

	}

}
