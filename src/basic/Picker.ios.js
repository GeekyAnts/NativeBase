/* @flow */

import React, { Component } from 'react';
import { Picker, Modal, View, ListView } from 'react-native';
import _ from 'lodash';
import { Text } from './Text';
import { List } from './List';
import { IconNB as Icon } from './IconNB';
import { Radio } from './Radio';
import { Container } from './Container';
import { Content } from './Content';
import { ListItem } from './ListItem';
import { Button } from './Button';
import { Header } from './Header';
import { Title } from './Title';
import { Left } from './Left';
import { Right } from './Right';
import { Body } from './Body';
import { connectStyle } from '@shoutem/theme';
import computeProps from '../Utils/computeProps';

import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class PickerNB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentLabel: this.getLabel(props),
      dataSource: props.children
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentLabel = this.state.currentLabel;
    const nextLabel = this.getLabel(nextProps);
    const currentDS = this.state.dataSource;
    const nextDS = nextProps.children

    if (currentLabel !== nextLabel) {
      this.setState({
        currentLabel: nextLabel,
      });
    }
    if (currentDS !== nextDS) {
      this.setState({
        dataSource: nextDS,
      });
    }
  }

  getInitialStyle() {
    return {
      picker: {
                // alignItems: 'flex-end'
      },
      pickerItem: {

      },
    };
  }
  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().picker,
      itemStyle: this.getInitialStyle().pickerItem,
    };

    return computeProps(this.props, defaultProps);
  }

  getLabel(props) {
    const item = _.find(props.children, child => child.props.value === props.selectedValue);
    return _.get(item, 'props.label');
  }

  modifyHeader() {
    const childrenArray = React.Children.toArray(this.props.headerComponent.props.children);
    const newChildren = [];
    childrenArray.forEach((child) => {
      if (child.type === Button) {
        newChildren.push(React.cloneElement(child,
          { onPress: () => { this._setModalVisible(false); } }));
      } else {
        newChildren.push(child);
      }
    });
    return <Header {...this.props.headerComponent.props} >{newChildren}</Header>;
  }

  renderIcon() {
    return React.cloneElement(this.props.iosIcon, { style: { fontSize: 22, lineHeight: 26, color: '#7a7a7a' } });
  }

  renderButton() {
    const onPress = () => { this._setModalVisible(true); };
    const text = this.state.currentLabel ? this.state.currentLabel : this.props.defaultLabel;
    if (this.props.renderButton) {
      return this.props.renderButton(onPress, text, this);
    }
    return <Button
      style={this.props.style}
      dark
      picker
      transparent
      onPress={onPress}
    >
      <Text note={(this.props.note)} style={this.props.textStyle}>{text}</Text>
      {(this.props.iosIcon === undefined) ? null : this.renderIcon()}
    </Button>;
  }

  renderHeader() {
    return (this.props.headerComponent) ? this.modifyHeader() : (<Header >
      <Left><Button
        style={{ shadowOffset: null, shadowColor: null, shadowRadius: null, shadowOpacity: null }}
        transparent onPress={() => { this._setModalVisible(false); }}
      ><Text>Back</Text></Button></Left>
    <Body><Title>{(this.props.iosHeader) ? this.props.iosHeader : 'Select One'}</Title></Body>
      <Right />
    </Header>);
  }

  render() {
    return (
      <View ref={c => this._root = c}>
        {this.renderButton()}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this._setModalVisible(false); }}
        >
          <Container>
            {this.renderHeader()}
            <Content>
              <List
                dataArray={this.state.dataSource}
                renderRow={child =>
                  <ListItem
                    selected={(child.props.value === this.props.selectedValue) ? true : false}
                    button
                    style={this.props.itemStyle}
                    onPress={() => {
                      this._setModalVisible(false); this.props.onValueChange(child.props.value);
                      this.setState({ current: child.props.label });
                    }}
                  >
                    <Text style={this.props.itemTextStyle} >{child.props.label}</Text>
                    <Right>
                      {(child.props.value === this.props.selectedValue) ?
                                        (<Radio selected={true} />)
                                        :
                                        (<Radio selected={false} />)
                                    }
                    </Right>
                  </ListItem>
                            }
              />
            </Content>
          </Container>
        </Modal>
      </View>
    );
  }

}

PickerNB.Item = React.createClass({

  render() {
    return (
      <Picker.Item {...this.props()} />
    );
  },
});

PickerNB.propTypes = {
  ...View.propTypes,
};

const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB);

export {
  StyledPickerNB as PickerNB,
};
