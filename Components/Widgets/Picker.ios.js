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
            current: this.getSelected().props.label
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

    getSelected() {
        const selected = _.find(this.props.children,(o) => {
            return o.props.value == this.props.selectedValue;
        });
        return selected;
    }

    render() {
        return (
        <View>
            <Button transparent onPress={() => {this._setModalVisible(true)}}>{this.state.current}</Button>
            <Modal animationType='slide'
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {this._setModalVisible(false)}}
                >
                <Container>
                    <Header >
                        <Button transparent onPress={() => {this._setModalVisible(false)}}>Back</Button>
                        <Title>{this.props.iosHeader}</Title>
                        <Button transparent textStyle={{color: 'transparent'}}>Back</Button>
                    </Header>
                    <Content>
                        <List dataArray={this.props.children}
                            renderRow={(child) =>
                                <ListItem style={{paddingVertical: 10}} iconRight button onPress={() => {this._setModalVisible(false);this.props.onValueChange(child.props.value); this.setState({current: child.props.label})}} >
                                    <Text>{child.props.label}</Text>
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
