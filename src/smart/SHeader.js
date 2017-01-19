
import React, { Component } from 'react';
import { View } from 'react-native';
import { Left } from '../basic/Left';
import { Body } from '../basic/Body';
import { Right } from '../basic/Right';
import { Header } from '../basic/Header';
import { Button } from '../basic/Button';
import { Title } from '../basic/Title';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';

class SHeader extends Component {

  render() {
    return (
      <Header ref={c => this._root = c} {...this.props}>
        <Left>
          {(this.props.leftButton) ? <Button
            transparent onPress={this.props.leftButtonPress}
            style={this.props.leftButtonStyle}
          >{this.props.leftButton}</Button> : <View />}
        </Left>
        <Body>
          {(this.props.title) ? <Title style={this.props.titleStyle}>
            {this.props.title}</Title> : <View />}
        </Body>
        <Right>
          {(this.props.rightButton) ? <Button
            transparent
            onPress={this.props.rightButtonPress} style={this.props.rightButtonStyle}
          >{this.props.rightButton}</Button> : <View />}
        </Right>
      </Header>
    );
  }
}

SHeader.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
  leftButton: React.PropTypes.object,
  title: React.PropTypes.string,
  rightButton: React.PropTypes.object,
  leftButtonStyle: React.PropTypes.object,
  titleStyle: React.PropTypes.object,
  rightButtonStyle: React.PropTypes.object,
};

const StyledSHeader = connectStyle('NativeBase.SHeader', {}, mapPropsToStyleNames)(SHeader);
export {
  StyledSHeader as SHeader,
};
