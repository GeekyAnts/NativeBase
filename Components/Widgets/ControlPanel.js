/* @flow */
'use strict';

import React, {Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import NativeStarterComponent from '../Base/NativeStarterComponent';
import controlPanel from '../../Styles/controlPanel';
import {Route, Icon} from './../../native-starter-pro';

export default class ControlPanel extends NativeStarterComponent {
    
    render() {
        return (
            <View style={controlPanel.sidebar}>
                <ScrollView>
                    <Image source={require('../../img/icon.png')} style={{alignSelf:'center', margin: 30, width: 180, height: 100, opacity: 0.9}}/>
                    
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-home-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9,  bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.home}>
                            <Text style={controlPanel.linkText}>Home</Text>
                        </TouchableOpacity>                
                    </View>
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-email-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.inbox}>
                            <View>
                                <Text style={controlPanel.linkText}>Inbox</Text>
                                <View  style={controlPanel.badge}>
                                    <Text style={controlPanel.badgeText}>5</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-book-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.mail}>
                            <Text style={controlPanel.linkText}>Mail </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-compose-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.compose}>
                            <Text style={controlPanel.linkText}>Compose </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-gear-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.settings}>
                            <View>
                                <Text style={controlPanel.linkText}>Settings</Text>
                                <View  style={controlPanel.badge}>
                                    <Text style={controlPanel.badgeText}>2</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-chatboxes-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.chat   }>
                            <View>
                                <Text style={controlPanel.linkText}>Chat</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-bookmarks-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.forms}>
                            <Text style={controlPanel.linkText}>Forms </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-toggle-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.icons}>
                            <Text style={controlPanel.linkText}>Icons </Text>
                        </TouchableOpacity>
                    </View>    
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-photos-outline" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.modal}>
                            <Text style={controlPanel.linkText}>Modals </Text>
                        </TouchableOpacity>
                    </View>                  
                    <View style={{position: 'relative'}}>
                        <Icon name="ios-loop-strong" size={30} color="rgba(255,255,255,0.9)" style={{position:'absolute', left: 9, bottom: 6}}/>
                        <TouchableOpacity 
                            style={controlPanel.link}
                            underlayColor="#2D2D30"
                            onPress={Route.spinner}>
                            <Text style={controlPanel.linkText}>Spinners </Text>
                        </TouchableOpacity>
                    </View>   
                </ScrollView>
            </View>
        );
    }
    
}
