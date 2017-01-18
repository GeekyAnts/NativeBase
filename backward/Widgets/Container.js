/* @flow */

import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { Footer } from '../../basic/Footer';
import { Fab } from '../../basic/Fab';
import _ from 'lodash';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import { ViewNB } from './View';
import { Header } from './Header';
import { Content } from './Content';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

class Container extends NativeBaseComponent {

  propTypes: {
        style : React.PropTypes.object
    }

  renderHeader() {
    if (Array.isArray(this.props.children)) {
      return _.find(this.props.children, (item) => {
        if (item && (item.type.displayName === 'Styled(Header)' || item.type.displayName === 'Styled(SHeader)')) {
          return true;
        }
      });
    } else if (this.props.children && (this.props.children.type.displayName === 'Styled(Header)' || this.props.children.type.displayName === 'Styled(SHeader)')) {
      return this.props.children;
    }
  }
  renderContent() {
    if (Array.isArray(this.props.children)) {
      return _.filter(this.props.children, (item) => {
        if (item && (item.type.displayName === 'Styled(ViewNB)' || item.type.displayName ===
          'Styled(Content)' || item.type === Image || item.type === View ||
          item.type === ScrollView || item.type.displayName === 'Styled(Fab)')) {
          return true;
        }
      });
    } else if (this.props.children && (this.props.children.type.displayName === 'Styled(Content)' ||
       this.props.children.type.displayName === 'Styled(ViewNB)' ||
       this.props.children.type === View || this.props.children.type === Image ||
       this.props.children.type === ScrollView)) {
      return this.props.children;
    }
  }
  renderFooter() {
    if (Array.isArray(this.props.children)) {
      return _.find(this.props.children, (item) => {
        if (item && item.type.displayName === 'Styled(Footer)') {
          return true;
        }
      });
    } else if (this.props.children && this.props.children.type.displayName === 'Styled(Footer)') {
      return this.props.children;
    }
  }
  prepareRootProps() {
    const type = {
      flex: 1,
    };

    const defaultProps = {
      style: type,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return (
      <View ref={c => this._root = c} {...this.prepareRootProps()}>

        {this.renderHeader()}

        {this.renderContent()}

        {this.renderFooter()}

      </View>
    );
  }

}

Container.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledContainer = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(Container);

export {
  StyledContainer as Container,
};
