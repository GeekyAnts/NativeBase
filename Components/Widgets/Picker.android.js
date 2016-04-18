/* @flow */
'use strict';

import React, {Component,Text, View, Picker} from 'react-native';
const Item = Picker.Item;
export default class PickerA extends Component {
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
				<Text style={{color: '#fff', fontSize: 20, marginLeft: 10, fontWeight: '500'}}> Picker (Dropdown)</Text>
	    	    <Picker
	    	    	itemStyle={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}
	    	    	style={{width: 250, alignSelf: 'center'}}
		            selectedValue={this.state.selected1}
		            onValueChange={this.onValueChange.bind(this, 'selected1')}
		            mode="dropdown" >
		            <Item label="Option 1" value="key0" />
		            <Item label="Option 2" value="key1" />
		            <Item label="Option 3" value="key2" />
		            <Item label="Option 4" value="key3" />
	            </Picker>
	            <Text style={{color: '#fff', fontSize: 20, marginLeft: 10, fontWeight: '500'}}> Picker (Modal)</Text>
	             <Picker
	             	itemStyle={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}
	    	    	style={{width: 250, alignSelf: 'center'}}
		            selectedValue={this.state.selected1}
		            onValueChange={this.onValueChange.bind(this, 'selected1')}
		            mode="dialog" >
		            <Item label="Option 1" value="key0" />
		            <Item label="Option 2" value="key1" />
		            <Item label="Option 3" value="key2" />
		            <Item label="Option 4" value="key3" />
	            </Picker>
	        </View>
		);
	}
}