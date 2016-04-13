/* @flow */
'use strict';

import React, {Component,Text, View, Picker} from 'react-native';
const Item = Picker.Item;
export default class PickerI extends Component {
	constructor(props) {
		super(props);
		this.state = {			
			selected1: 'key3',
		}
	}
	onValueChange(key: string, value: string) {
	    const newState = {};
	    newState[key] = value;
	    this.setState(newState);
	}
	render() {
		return(
			<View>
				<Text style={{color: '#fff', fontSize: 20, marginLeft: 10, fontWeight: '500'}}> Picker </Text>
				<View style={{padding: 10}}>	
	        	    <Picker	        	    	
	        	    	itemStyle={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}
	    	            selectedValue={this.state.selected1}
	    	            onValueChange={this.onValueChange.bind(this, 'selected1')}
	    	            mode="dialog">
	    	            <Item style={{color: '#fff'}} label="Option 1" value="key0" />
	    	            <Item style={{color: '#fff'}} label="Option 2" value="key1" />
	    	            <Item style={{color: '#fff'}} label="Option 3" value="key2" />
	    	            <Item style={{color: '#fff'}} label="Option 4" value="key3" />
	    	        </Picker>
		        </View>
	        </View>
		);
	}
}