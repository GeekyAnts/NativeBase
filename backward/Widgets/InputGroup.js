/* @flow */

import React from 'react';
import { View, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import _ from 'lodash';
import NativeBaseComponent from '../Base/NativeBaseComponent';

class InputGroup extends NativeBaseComponent {

  propTypes: {
        borderType : React.PropTypes.string,
        toolbar : React.PropTypes.bool,
        atoolbar : React.PropTypes.bool,
        iconRight : React.PropTypes.bool,
        success : React.PropTypes.bool,
        disabled : React.PropTypes.bool,
        error : React.PropTypes.bool,
        style : React.PropTypes.object
    }


  renderChildren() {
    const newChildren = [];
    const childrenArray = React.Children.toArray(this.props.children);

    let iconElement = [];
    iconElement = _.remove(childrenArray, (item) => {
      if (item.type.displayName === 'Styled(Icon)') {
        return true;
      }
    });

    let buttonElement = [];

    buttonElement = _.remove(childrenArray, (item) => {
      if (item.type.displayName === 'Styled(Button)') {
        return true;
      }
    });

    const inp = _.find(childrenArray, (item) => {
      if (item && (item.type.displayName === 'Styled(Input)' || item.type.displayName === 'Styled(Picker)')) {
        return true;
      }
    });

    if (inp) {
      let inputProps = {};
      inputProps = inp.props;
      var clonedInp = React.cloneElement(
         inp,
        {
          ...this.inputProps,
          key: 'inp',
          toolbar: (this.props.toolbar && Platform.OS === 'ios') ? true : undefined,
          editable: this.props.disabled ? false : undefined,
        }
       );
    }

    if (Array.isArray(this.props.children)) {
      if (this.props.iconRight && iconElement.length > 0) {
        if (clonedInp) {
          newChildren.push(clonedInp);
        }
        newChildren.push(React.cloneElement(iconElement[0]));
      } else if (buttonElement.length > 0) {
        if (iconElement.length > 0) {
          newChildren.push(React.cloneElement(
            iconElement[0],
            {
              key: 'icon0',
            }
          ));
        }

        if (clonedInp) {
          newChildren.push(clonedInp);
        }
        newChildren.push(React.cloneElement(
          buttonElement[0],
          {
            key: 'button1',
          }
        ));
      } else if (iconElement.length > 1) {
        newChildren.push(React.cloneElement(
            iconElement[0],
          {
            key: 'icon0',
          }
          ));
        if (clonedInp) {
          newChildren.push(clonedInp);
        }
        newChildren.push(React.cloneElement(
            iconElement[1],
          {
            key: 'icon1',
          }
          ));
      } else {
        if (iconElement.length > 0) {
          newChildren.push(React.cloneElement(iconElement[0]));
        }
        if (clonedInp) {
          newChildren.push(clonedInp);
        }
      }
    } else if (clonedInp) {
      newChildren.push(clonedInp);
    }

    return newChildren;
  }

  render() {
    return (
      <View ref={c => this._root = c} {...this.props} >
        {this.renderChildren()}
      </View>
    );
  }
}

InputGroup.propTypes = {
  ...View.propTypes,
};


mapPropsToStyleNames = (styleNames, props) => {
  const keys = _.keys(props);
  const values = _.values(props);

  _.forEach(keys, (key, index) => {
    if (values[index]) { styleNames.push(key); }
  });
  const border = (props.borderType ? props.borderType : 'underline');
  styleNames.push(border);

  return styleNames;
};


const StyledInputGroup = connectStyle('NativeBase.InputGroup', {}, mapPropsToStyleNames)(InputGroup);

export {
  StyledInputGroup as InputGroup,
};
