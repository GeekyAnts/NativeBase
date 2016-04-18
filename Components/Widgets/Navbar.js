/* @flow */
'use strict';

import React, {Component, Text, View, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import navbarStyle from './../../Styles/navbar.js';
import {brandPrimary as primary} from '../../Styles/variable';
import {Actions} from 'react-native-router-flux';
import AppEventEmitter from '../../Services/AppEventEmitter';

export default class Navbar extends Component {

    open () {

        AppEventEmitter.emit('hamburger.click');

    }

    render() {
        return(
                <View>
                { Platform.OS === 'ios' ?
                    <View style={ [navbarStyle.navbar, { height: (this.props.subtitle) ? 80 : 60 }]}>
                        <View>
                            <TouchableOpacity onPress={Actions.pop} style={{ flexDirection: "row" }}>
                                <Icon name="ios-arrow-left" size={40} color="rgba(255,255,255,0.9)"/>
                                { (this.props.leftText) ?
                                    <Text style={{alignSelf:"center", color: '#fff', fontSize: 17, marginLeft: 3, marginBottom: 5}}>{this.props.leftText}</Text>
                                :
                                    <View></View>
                                }
                            </TouchableOpacity>
                        </View>                
                        <View>
                            <Text style={navbarStyle.title}> {this.props.title} </Text>
                            <Text style={[navbarStyle.subtitle, { height: (!this.props.subtitle) ? 0 : 20 } ]}> {this.props.subtitle} </Text>
                        </View>
                        <TouchableOpacity onPress={this.open}>
                            <Icon name="navicon" size={40} color="rgba(255,255,255,0.9)" style={{top:0}} />
                        </TouchableOpacity>
                    </View>            
                :
                    <View style={ [navbarStyle.navbar, { height: (this.props.subtitle) ? 80 : 60 }]}>
                        { this.props.menuPosition === 'left' ?    
                            <View >
                                <TouchableOpacity onPress={this.open}>
                                    <Icon name="navicon" size={40} color="rgba(255,255,255,0.9)" style={{top:0}} />
                                </TouchableOpacity> 
                            </View>
                            :
                            <View ></View>
                        }
                        <View style={{ marginLeft: this.props.menuPosition === 'left' ? -25 : 0}}>
                            <Text style={navbarStyle.title}> {this.props.title} </Text>
                            <Text style={[navbarStyle.subtitle, { height: (!this.props.subtitle) ? 0 : 20 } ]}> {this.props.subtitle} </Text>
                        </View>
                        { this.props.menuPosition !== 'left' ?
                            <TouchableOpacity onPress={this.open}>
                                <Icon name="navicon" size={40} color="rgba(255,255,255,0.9)" style={{top:0}} />
                            </TouchableOpacity>
                            :
                            <View></View>
                        }
                    </View>
                }
                </View>
        );
    }
}

