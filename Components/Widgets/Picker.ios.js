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

    renderButton() {
        const onPress = () => { this._setModalVisible(true); };
        const text = this.state.currentLabel ? this.state.currentLabel : this.props.defaultLabel;
        if (this.props.renderButton) {
        return this.props.renderButton({onPress, text, picker:this});
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
        return (this.props.headerComponent) ? this.modifyHeader() : (<Header style={this.props.headerStyle}>
            <Button transparent textStyle={this.props.headerButtonTextStyle} onPress={() => {this._setModalVisible(false)}}>Back</Button>
            <Title style={this.props.headerTextStyle}>{(this.props.iosHeader) ? this.props.iosHeader : 'Select One'}</Title>
        </Header>)
    }

    render() {
        return (
        <View ref={c => this._root = c}>
            {this.renderButton()}
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
