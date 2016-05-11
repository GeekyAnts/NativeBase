/* @flow */
'use strict';

import React, {Component} from 'react';
import lightTheme from '../Themes/light';

export default class NativeBaseComponent extends Component {			
	static contextTypes = {
		theme: React.PropTypes.object
	}

	static propTypes = {
		theme: React.PropTypes.object
	}

	static childContextTypes = {
		theme: React.PropTypes.object
	}

	getChildContext() {
		return {theme: this.props.theme ? this.props.theme : this.getTheme()};
	}

	getTheme() {
		return this.props.theme ? this.props.theme : this.context.theme || lightTheme
	}
}