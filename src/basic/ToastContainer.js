/* @flow */


import React, { Component } from 'react';
import { View, Modal, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { Text } from './Text';
import { Button } from './Button';
import { ViewNB } from './View';
import { Toast } from './Toast';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';


class ToastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      modalVisible: nextProps.showToast
    });
    // if (nextProps.autoHide) {
    //   setTimeout(()=> {
    //     this.setState({
    //       modalVisible: false
    //     });
    //   }, this.state.duration);
    // }
    // else if (nextProps.autoHide && nextProps.duration) {
    //   setTimeout(()=> {
    //     this.setState({
    //       modalVisible: false
    //     });
    //   }, nextProps.duration);
    // }
  }
  componentDidMount() {
    if (!this.props.autoHide && this.props.duration) {
      console.warn(`It's not recommended to set autoHide false with duration`);
    }
  }
  render() {
    return (
      <Modal
        animationType={(this.props.position=='bottom') ? "slide" : "fade"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
        <View style={{
            margin: (Platform.OS==='ios') ? 20 : 0,
            flex: 1,
            justifyContent: (this.props.position==='top') ? 'flex-start' : (this.props.position==='bottom') ? 'flex-end' : (this.props.position==='center') ? 'center' : 'flex-start'}}>
          <Toast
            danger={(this.props.danger) ? true : false}
            success={(this.props.success) ? true : false}
            warning={(this.props.warning) ? true : false}>
            {this.props.children}
            {(this.props.buttonText) && <Button onPress={() => {
                (this.props.buttonPress) ? this.props.buttonPress() : undefined
              }}>
              <Text>{this.props.buttonText}</Text>
            </Button>}

          </Toast>
        </View>
      </Modal>
    );
  }
}

ToastContainer.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

export {
  ToastContainer,
};
