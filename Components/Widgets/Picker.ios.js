/* @flow */
'use strict';

import React from 'react';
import {Picker, Modal} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import View from './View';
import Text from './Text';
import List from './List';
import Icon from './Icon';
import Container from './Container';
import Content from './Content';
import ListItem from './ListItem';
import Button from './Button';
import Header from './Header';
import Title from './Title';
import _ from 'lodash';

export default class PickerNB extends NativeBaseComponent {

    constructor(props) {
        super(props);

        this.state = {
          modalVisible : false,
          currentLabel: this.getLabel(props)
        }
    }

    componentWillReceiveProps(nextProps) {
      const currentLabel = this.state.currentLabel;
      const nextLabel = this.getLabel(nextProps);

      if (currentLabel !== nextLabel) {
        this.setState({
          currentLabel: nextLabel
        });
      }
    }

    getInitialStyle() {
        return {
            picker: {
                // alignItems: 'flex-end'
            },
            pickerItem: {

            }
        }
    }
    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().picker,
            itemStyle: this.getInitialStyle().pickerItem
        };

        return computeProps(this.props, defaultProps);
    }

    getLabel(props) {
        const item = _.find(props.children, child => {
            return child.props.value == props.selectedValue;
        });

        return _.get(item, 'props.label');
    }

    modifyHeader() {
        let childrenArray = React.Children.toArray(this.props.headerComponent.props.children);
        let newChildren = [];
        childrenArray.forEach((child) => {
            if (child.type==Button) {
                newChildren.push(React.cloneElement(child, {onPress: () => {this._setModalVisible(false)}}))
            } else {
                newChildren.push(child)
            }
        });
        return <Header {...this.props.headerComponent.props} > {newChildren}</Header>
    }

    renderIcon() {
        return React.cloneElement(this.props.iosIcon, {style: {fontSize: 22, lineHeight: 26, color: '#7a7a7a' }})
    }

    renderHeader() {
        return (this.props.headerComponent) ? this.modifyHeader() : (<Header >
            <Button transparent onPress={() => {this._setModalVisible(false)}}>Back</Button>
            <Title>Select One</Title>
        </Header>)
    }

    render() {
        return (
        <View>
            <Button
                iconRight={(this.props.iosIcon== undefined) ? false : true}
                transparent
                textStyle={this.props.textStyle}
                style={this.props.style}
                onPress={() => {this._setModalVisible(true)}}>
                {this.state.currentLabel}
                {(this.props.iosIcon == undefined) ? <Icon name="ios-home" style={{opacity: 0}} /> : this.renderIcon()}
            </Button>
            <Modal animationType='slide'
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {this._setModalVisible(false)}}
                >
                <Container>
                    {this.renderHeader()}
                    <Content>
                        <List dataArray={this.props.children}
                            renderRow={(child) =>
                                <ListItem style={{paddingVertical: 5}} iconRight button onPress={() => {this._setModalVisible(false);this.props.onValueChange(child.props.value); this.setState({current: child.props.label})}} >
                                    <Text >{child.props.label}</Text>
                                    {(child.props.value===this.props.selectedValue) ?
                                        (<Icon name='ios-checkmark-outline' />)
                                        :
                                        (<Icon name='ios-checkmark-outline' style={{color: 'transparent'}} />)
                                    }
                                </ListItem>
                            }>
                        </List>
                    </Content>
                </Container>
            </Modal>
        </View>
        );
    }

}

PickerNB.Item = React.createClass({

    render: function() {
        return(
          <Picker.Item {...this.props()}/>
          );
    }
});
