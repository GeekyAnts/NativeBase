/* @flow */


import React, { Component } from 'react';
import { View, Modal, Platform, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';
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
  static toastInstance;
  static show({...config}) {
    this.toastInstance._root.showToast({config});
  }
  showToast({config}) {
    this.setState({
      modalVisible: true,
      text: config.text,
      buttonText: config.buttonText,
      type: config.type,
      position: config.position,
      supportedOrientations: config.supportedOrientations
    });
    if (config.duration>0) {
      setTimeout(()=> {
        this.setState({
          modalVisible: false
        });
      }, config.duration);
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
        supportedOrientations={this.state.supportedOrientations || null}
        animationType={(this.state.position=='bottom') ? "slide" : "fade"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({
            modalVisible: false
          });
        }}
        >
        <View style={{
            margin: (Platform.OS==='ios') ? 20 : 0,
            flex: 1,
            justifyContent: (this.state.position==='top') ? 'flex-start' : (this.state.position==='bottom') ? 'flex-end' : (this.state.position==='center') ? 'center' : 'flex-start'}}>
          <Toast
            danger={(this.state.type == 'danger') ? true : false}
            success={(this.state.type == 'success') ? true : false}
            warning={(this.state.type == 'warning') ? true : false}>
            <Text>{this.state.text}</Text>
            {(this.state.buttonText) && <Button onPress={() => {
                this.setState({
                  modalVisible: false
                });
              }}>
              <Text>{this.state.buttonText}</Text>
            </Button>}

          </Toast>
        </View>
      </Modal>
    );
  }
}

ToastContainer.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledToastContainer = connectStyle('NativeBase.ToastContainer', {}, mapPropsToStyleNames)(ToastContainer);

export {
  StyledToastContainer as ToastContainer,
};
