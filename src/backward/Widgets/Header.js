/* @flow */

import React from 'react';
import { Platform, View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import _ from 'lodash';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import { Button } from './Button';
import { Title } from './Title';
import { Subtitle } from './Subtitle';

class Header extends NativeBaseComponent {

  propTypes: {
        searchBar : React.PropTypes.bool,
        rounded : React.PropTypes.bool,
        style : React.PropTypes.object,
        iconRight: React.PropTypes.bool
    }


  renderChildren() {
    if (!Array.isArray(this.props.children)) {
      return this.props.children;
    } else if (Array.isArray(this.props.children)) {
      const newChildren = [];
      const childrenArray = React.Children.toArray(this.props.children);

      let buttons = [];
      buttons = _.remove(childrenArray, (item) => {
        if (item.type === Button) {
          return true;
        }
      });

      let title = [];
      title = _.remove(childrenArray, (item) => {
        if (item.type === Title) {
          return true;
        }
      });

      let subtitle = [];
      subtitle = _.remove(childrenArray, (item) => {
        if (item.type === Subtitle) {
          return true;
        }
      });

      let input = [];
      input = _.remove(childrenArray, (item) => {
        if (item.type.displayName === 'Styled(InputGroup)') {
          return true;
        }
      });

      if (buttons.length === 1 && this.props.iconRight) {
        if (Platform.OS === 'ios') {
          newChildren.push(<View key="title" style={{ position: 'absolute', left: 0, right: 0, top: 13, bottom: 0, alignSelf: 'center', justifyContent: 'center' }}>
            {[title[0], subtitle[0]]}
          </View>);
          newChildren.push(<View key="title2" style={{ flex: 3, alignSelf: 'stretch' }} />);
          newChildren.push(<View key="btn1" style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -14 }}>
            {React.cloneElement(buttons[0])}
          </View>);
        } else {
          newChildren.push(<View key="title" style={{ flex: 3, alignSelf: 'stretch', justifyContent: 'center' }}>
            {[title[0]]}
          </View>);
          newChildren.push(<View key="btn1" style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -10, marginRight: 12 }}>
            {React.cloneElement(buttons[0], { header: true })}
          </View>);
        }
      } else if (this.props.searchBar) {
        if (Platform.OS === 'ios') {
          newChildren.push(
                        React.cloneElement(input[0], { toolbar: true, key: 'inp' }));
          newChildren.push(
                        React.cloneElement(buttons[0]));
        } else {
          newChildren.push(React.cloneElement(input[0], { atoolbar: true }));
        }
      } else if (buttons.length >= 1) {
        if (Platform.OS === 'ios') {
          newChildren.push(<View key="title" style={{ position: 'absolute', left: 0, right: 0, top: 13, bottom: 0, alignSelf: 'center', justifyContent: 'center' }}>
            {[title[0], subtitle[0]]}
          </View>);
          newChildren.push(<View key="btn1" style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -14 }}>
            {React.cloneElement(buttons[0])}
          </View>);
          newChildren.push(<View key="title2" style={{ flex: 3, alignSelf: 'stretch' }} />);
          if (buttons.length > 1) {
            for (let i = 1; i < buttons.length; i++) {
              newChildren.push(<View key={`btn${i + 1}`} style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -14 }}>
                {React.cloneElement(buttons[i])}
              </View>);
            }
          }
        } else {
          newChildren.push(<View key="btn1" style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginLeft: -10, marginRight: 12 }}>
            {React.cloneElement(buttons[0])}
          </View>);
          newChildren.push(<View key="title" style={{ flex: 3, alignSelf: 'stretch', justifyContent: 'center' }}>
            {[title[0]]}
          </View>);
          for (let i = 1; i < buttons.length; i++) {
            newChildren.push(<View key={`btn${i + 1}`} style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -7 }}>
              {React.cloneElement(buttons[i])}
            </View>);
          }
        }
      } else if (Platform.OS === 'ios') {
        newChildren.push(<View key="title" style={{ position: 'absolute', left: 0, right: 0, top: 13, bottom: 0, alignSelf: 'center', justifyContent: 'center' }}>
          {[title[0], subtitle[0]]}
        </View>);

        if (childrenArray.length > 1) {
          for (let i = 1; i < childrenArray.length; i++) {
            newChildren.push(<View key={`btn${i + 1}`} style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -14 }}>
              {React.cloneElement(childrenArray[i], {})}
            </View>);
          }
        }
      } else {
        newChildren.push(<View key="title" style={{ flex: 3, alignSelf: 'stretch', justifyContent: 'center' }}>
          {[title[0]]}
        </View>);
        for (let i = 1; i < childrenArray.length; i++) {
          newChildren.push(<View key={`btn${i + 1}`} style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginRight: -7 }}>
            {React.cloneElement(childrenArray[i], {})}
          </View>);
        }
      }
      return newChildren;
    }
  }

  render() {
    return (
      <View ref={c => this._root = c} {...this.props} >
        {this.renderChildren()}
      </View>
    );
  }
}

Header.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledHeader = connectStyle('NativeBase.Header', {}, mapPropsToStyleNames)(Header);
export {
  StyledHeader as Header,
};
