/* @flow */
'use strict';

import React, {Component, Text, View, TouchableOpacity} from 'react-native';
import footer from '../../Styles/footer';
import Icon from 'react-native-vector-icons/Ionicons';
import {brandPrimary as primary} from '../../Styles/variable';
import {Actions} from 'react-native-router-flux';

export default class Footer extends Component {

	render() {
		return (
			<View style={footer.footer}>
				<TouchableOpacity onPress={Actions.calendar}>
					<Icon name="ios-calendar-outline" size={32} color="rgba(255,255,255,0.9)" style={{top:10}}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={Actions.chart}>
					<Icon name="ios-pie-outline" size={36} color="rgba(255,255,255,0.9)" style={{top:8}}/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon name="ios-plus-outline" size={38} color="rgba(255,255,255,0.9)" style={{top:8}}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={Actions.contact}>
					<Icon name="ios-person" size={35} color="rgba(255,255,255,0.9)" style={{top:10}}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={Actions.list}>
					<Icon name="ios-time-outline" size={35} color="rgba(255,255,255,0.9)" style={{top:10}}/>
				</TouchableOpacity>
			</View>
		);
	}
}

