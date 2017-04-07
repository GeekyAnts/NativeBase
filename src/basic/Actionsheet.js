/* @flow */


import React, { Component } from 'react';
import { View, Modal, Platform, ActionSheetIOS, TouchableOpacity } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { Text } from './Text';
import { Button } from './Button';
import { ViewNB } from './View';
import { Icon } from './Icon';
import { Left } from './Left';
import { Right } from './Right';
import { Body } from './Body';
import { List } from './List';
import { ListItem } from './ListItem';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class ActionSheetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      items: [],
    }
  }
  static actionsheetInstance;
  static show(config, callback) {
    this.actionsheetInstance._root.showActionSheet(config, callback);
  }
  showActionSheet(config, callback) {
    if (Platform.OS==='ios') {
      if (typeof config.options [0]=='object') {
        let options = config.options;
        let filtered = options.map((item) => {
          return item.text
        });
        config.options = filtered;
        ActionSheetIOS.showActionSheetWithOptions(config, callback);
      }
      else {
        ActionSheetIOS.showActionSheetWithOptions(config, callback);
      }
    }
    else {
      this.setState({
        items: config.options,
        title: config.title,
        message: config.message,
        destructiveButtonIndex: config.destructiveButtonIndex,
        cancelButtonIndex: config.cancelButtonIndex,
        modalVisible: true,
        callback: callback
      });
    }
  }
  componentDidMount() {
    if (!this.props.autoHide && this.props.duration) {
      console.warn(`It's not recommended to set autoHide false with duration`);
    }
  }
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={()=> this.setState({modalVisible: false})}
        >
       <TouchableOpacity activeOpacity={1} onPress={()=> this.setState({modalVisible: false})} style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity activeOpacity={1} style={{backgroundColor: '#fff', height: this.state.length*80, padding: 15, elevation: 4}}>
          <Text style={{color: '#757575'}}>{this.state.title}</Text>
          <List style={{marginHorizontal: -15, marginTop: 15}} dataArray={this.state.items} renderRow={(data, i, id) =>

              { return (typeof this.state.items[0]==='string') ?
               <ListItem onPress={()=> { this.state.callback(id); this.setState({modalVisible: false})}} style={{borderColor: 'transparent'}}>
                <Text>{data}</Text>
              </ListItem>
              :
              <ListItem onPress={()=> { this.state.callback(id); this.setState({modalVisible: false})}} style={{borderColor: 'transparent'}} icon>
                <Left>
                  <Icon name={data.icon} />
                </Left>
                <Body style={{borderColor: 'transparent'}}>
                  <Text>{data.text}</Text>
                </Body>
                <Right />
              </ListItem>}
          } />
      </TouchableOpacity>
      </TouchableOpacity>
      </Modal>
    );
  }
}

ActionSheetContainer.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledActionSheetContainer = connectStyle('NativeBase.ActionSheetContainer', {}, mapPropsToStyleNames)(ActionSheetContainer);

export {
  StyledActionSheetContainer as ActionSheetContainer,
};
