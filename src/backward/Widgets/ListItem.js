/* @flow */

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { IconNB as Icon } from '../../basic/IconNB';
import _ from 'lodash';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import { Text } from './Text';

class ListItem extends NativeBaseComponent {


  getInitialStyle() {
    return {
      listItem: {
      },
      listItemDivider: {
      },
      itemText: {
      },
      dividerItemText: {
      },
      itemIcon: {
      },
      itemNote: {
      },
      itemSubNote: {
      },
      thumbnail: {
      },
      Gravatar: {
      },
      fullImage: {
      },
      itemButton: {},

    };
  }

  getRightStyle() {
    return {
      right: {
        flex: 1,
        paddingLeft: 10,

      },
      right2: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

      },
      right3: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        alignSelf: 'flex-start',

      },
    };
  }

  thumbnailPresent() {
    let thumbnailComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(Thumbnail)') { thumbnailComponentPresent = true; }
    });

    return thumbnailComponentPresent;
  }

  gravatarPresent() {
    let gravatarComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(Gravatar)') { gravatarComponentPresent = true; }
    });

    return gravatarComponentPresent;
  }

  checkBoxPresent() {
    let checkBoxComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(CheckBox)') { checkBoxComponentPresent = true; }
    });

    return checkBoxComponentPresent;
  }

  radioPresent() {
    let radioComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(Radio)') { radioComponentPresent = true; }
    });

    return radioComponentPresent;
  }

  iconPresent() {
    let iconComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(Icon)') { iconComponentPresent = true; }
    });
    return iconComponentPresent;
  }

  pickerPresent() {
    let pickerComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(PickerNB)') { pickerComponentPresent = true; }
    });
    return pickerComponentPresent;
  }

  badgePresent() {
    let badgeComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(Badge)') { badgeComponentPresent = true; }
    });

    return badgeComponentPresent;
  }

  inputPresent() {
    let inputComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(InputGroup)') { inputComponentPresent = true; }
    });
    return inputComponentPresent;
  }

  buttonPresent() {
    let buttonComponentPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(Button)') { buttonComponentPresent = true; }
    });

    return buttonComponentPresent;
  }

  getChildProps(child) {
    let defaultProps = {};

    if (child && child.type.displayName === 'Image' && !Array.isArray(this.props.children)) {
      defaultProps = {
        resizeMode: 'stretch',
        style: this.getInitialStyle().fullImage,
      };
    } else if (child && child.type.displayName === 'Styled(Button)') {
      defaultProps = {
        small: true,
        style: this.getInitialStyle().itemButton,
      };
    } else if (child && child.type.displayName === 'Styled(InputGroup)') {
      defaultProps = {
        style: {
          borderColor: (this.props.children.props.success) ?
                                this.getTheme().inputSuccessBorderColor :
                                (this.props.children.props.error) ?
                                this.getTheme().inputErrorBorderColor :
                                this.getTheme().listBorderColor,
        },
        foregroundColor: this.getContextForegroundColor(),
      };
    } else if (child && child.type.displayName === 'Styled(Text)') {
      if (this.props.itemDivider) {
        defaultProps = {
          style: this.getInitialStyle().dividerItemText,
        };
      } else if (child.props.note && (this.thumbnailPresent() || this.gravatarPresent())) {
        defaultProps = {
          style: this.getInitialStyle().itemSubNote,
        };
      } else if (child.props.note) {
        defaultProps = {
          style: this.getInitialStyle().itemNote,
        };
      } else {
        defaultProps = {
          style: this.getInitialStyle().itemText,
        };
      }
    } else if (child && child.type.displayName === 'Styled(Icon)') {
      defaultProps = {
        style: this.getInitialStyle().itemIcon,
      };
    } else if (child && child.type.displayName === 'Styled(Picker)') {
      defaultProps = {
        style: {
          flex: 0.45,
          alignSelf: 'flex-end',
          paddingVertical: 5,
          height: 30,
        },
        textStyle: {
          color: '#7a7a7a',
        },
      };
    } else if (child && child.type.displayName === 'Styled(Thumbnail)') {
      defaultProps = {
        style: this.getInitialStyle().thumbnail,
      };
    } else if (child && child.type.displayName === 'Styled(Gravatar)') {
      defaultProps = {
        style: this.getInitialStyle().gravatar,
      };
    } else {
      defaultProps = {
        foregroundColor: this.getContextForegroundColor(),
      };
    }
    return computeProps(child.props, defaultProps);
  }

  notePresent() {
    let notePresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(Text)' && child.props.note) { notePresent = true; }
    });
    return notePresent;
  }

  insetPresent() {
    let insetPresent = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.displayName === 'Styled(InputGroup)' && child.props.inset) { insetPresent = true; }
    });

    return insetPresent;
  }


  inlinePresent() {
    let inlineComponentPresent = false;
    if (this.inputPresent()) {
      if (this.props.children.props.children.props &&
        this.props.children.props.children.props.inlineLabel) {
        inlineComponentPresent = true;
      } else { inlineComponentPresent = false; }
    }
    return inlineComponentPresent;
  }

  stackedPresent() {
    let stackedComponentPresent = false;
    if (this.inputPresent()) {
      if (this.props.children.props.children.props &&
        this.props.children.props.children.props.stackedLabel) {
        stackedComponentPresent = true;
      } else { stackedComponentPresent = false; }
    }

    return stackedComponentPresent;
  }


  squareThumbs() {
    let squareThumbs = false;
    if (this.thumbnailPresent() || this.gravatarPresent()) {
      React.Children.forEach(this.props.children, (child) => {
        if (child.props.square) { squareThumbs = true; }
      });
    }

    return squareThumbs;
  }

  renderChildren() {
    this.iconPresent();

    const newChildren = [];
    if (!Array.isArray(this.props.children) &&
    !this.inlinePresent() && !this.stackedPresent() && !this.insetPresent()) {
      newChildren.push(
        <View key="listItem" style={{ flex: 1 }}>
          {React.cloneElement(this.props.children, this.getChildProps(this.props.children))}
        </View>
            );
    } else {
      const childrenArray = React.Children.toArray(this.props.children);
      let iconElement = [];

      if (this.props.iconLeft && !this.props.iconRight && !this.pickerPresent()) {
        iconElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(Icon)') {
            return true;
          }
        });
        newChildren.push(React.cloneElement(iconElement[0], { ...this.getChildProps(iconElement[0]), key: 'listItem0' }));
        newChildren.push(
          <View key="listItem1" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }} >
            {childrenArray.map((child, i) =>
              React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
          </View>);
      } else if (this.props.iconLeft && this.pickerPresent()) {
        const pickerElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(PickerNB)') {
            return true;
          }
        });
        newChildren.push(<View key="listItem0" style={{ flexDirection: 'row', alignItems: 'center', flex: 1.8 }} >
          {childrenArray.map((child, i) =>
            React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
        </View>);
        newChildren.push(React.cloneElement(pickerElement[0], { ...this.getChildProps(pickerElement[0]), key: 'listItem1', style: { flex: 1, alignSelf: 'flex-end' } }));
      } else if (this.props.iconRight && !this.props.iconLeft) {
        iconElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(Icon)') {
            return true;
          }
        });

        newChildren.push(<View key="listItem0" >
          {childrenArray.map((child, i) =>
            React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
        </View>);
        newChildren.push(React.cloneElement(iconElement[0], { ...this.getChildProps(iconElement[0]), key: 'listItem1' }));
      } else if (this.badgePresent()) {
        const badgeElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(Badge)') {
            return true;
          }
        });

        newChildren.push(<View key="listItem0" >
          {childrenArray.map((child, i) =>
            React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
        </View>);
        newChildren.push(React.cloneElement(badgeElement[0], { ...this.getChildProps(badgeElement[0]), key: 'listItem1' }));
      } else if (this.props.iconLeft && this.props.iconRight) {
        iconElement = _.filter(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(Icon)') {
            return true;
          }
        });

        newChildren.push(<View key="listItem0" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
          {childrenArray.slice(0, 2).map((child, i) =>
            React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
        </View>);
        newChildren.push(React.cloneElement(iconElement[1], { ...this.getChildProps(iconElement[1]), key: 'listItem1' }));
      } else if (this.thumbnailPresent()) {
        iconElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(Thumbnail)') {
            return true;
          }
        });
        newChildren.push(React.cloneElement(iconElement[0], { ...this.getChildProps(iconElement[0]), key: 'listItem0' }));
        newChildren.push(<View key="listItem1" style={{ flexDirection: 'column', paddingLeft: 15, alignSelf: (this.squareThumbs()) ? 'flex-start' : 'flex-start', flex: 1 }} >
          {childrenArray.map((child, i) =>
            React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
        </View>);
      } else if (this.gravatarPresent()) {
        iconElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(Gravatar)') {
            return true;
          }
        });
        newChildren.push(React.cloneElement(iconElement[0], { ...this.getChildProps(iconElement[0]), key: 'listItem0' }));
        newChildren.push(<View key="listItem1" style={{ flexDirection: 'column', paddingLeft: 15, alignSelf: (this.squareThumbs()) ? 'flex-start' : 'center', flex: 1 }} >
          {childrenArray.map((child, i) =>
            React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
        </View>);
      } else if (this.checkBoxPresent()) {
        iconElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(CheckBox)') {
            return true;
          }
        });
        newChildren.push(React.cloneElement(iconElement[0], this.getChildProps(iconElement[0])));
        newChildren.push(<View key="listItem1" style={{ flexDirection: 'row', paddingLeft: 15, justifyContent: 'space-between', alignSelf: (this.squareThumbs()) ? 'flex-start' : 'center', flex: 1 }} >
          {childrenArray.map(child => React.cloneElement(child, this.getChildProps(child)))}
        </View>);
      } else if (this.radioPresent()) {
        iconElement = _.remove(childrenArray, (item) => {
          if (item.type.displayName === 'Styled(Radio)') {
            return true;
          }
        });
        newChildren.push(<View key="listItem1" style={{ flexDirection: 'column', alignSelf: (this.squareThumbs()) ? 'flex-start' : 'center', flex: 1 }} >
          {childrenArray.map(child => React.cloneElement(child, this.getChildProps(child)))}
        </View>);
        newChildren.push(React.cloneElement(iconElement[0], this.getChildProps(iconElement[0])));
      } else if (this.inputPresent() && !this.inlinePresent() &&
      !this.stackedPresent() && !this.insetPresent()) {
        newChildren.push(<View key="listItem0" style={{ flexDirection: 'column', alignSelf: 'center', flex: 1 }} >
          {childrenArray.map((child, i) =>
            React.cloneElement(child, { ...this.getChildProps(child), key: i }))}
        </View>);
      } else if (this.inlinePresent()) {
        newChildren.push(<View key="listItem0" style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, borderColor: this.getTheme().listBorderColor, alignItems: 'center', marginLeft: -10 }} >
          <Text style={{ color: this.getTheme().inputColorPlaceholder }}>
            {this.props.children.props.children.props.label}</Text>
        </View>);
        newChildren.push(<View key="listItem1" style={{ flexDirection: 'column', alignSelf: 'center', flex: 2.2 }} >
          {childrenArray.map((child, i) =>
            React.cloneElement(child,
              { ...this.getChildProps(child), key: i, style: { borderWidth: 0 } }))}
        </View>);
      } else if (this.stackedPresent()) {
        newChildren.push(<View key="listItem1" style={{ alignSelf: 'stretch', flex: 1 }} >
          <Text style={{ color: this.getTheme().inputColorPlaceholder, textAlign: 'left', fontSize: 15 }}>{this.props.children.props.children.props.label}</Text>

          {childrenArray.map((child, i) =>
            React.cloneElement(child,
              { ...this.getChildProps(child), key: i, style: { flex: 1, marginTop: 5 } }))}
        </View>);
      } else if (this.insetPresent()) {
        newChildren.push(<View key="listItem0" style={{ flexDirection: 'row', alignSelf: 'stretch', flex: 1, padding: 0 }} >
          {childrenArray.map((child, i) =>
            React.cloneElement(child,
              { ...this.getChildProps(child), key: i }))}
        </View>);
        newChildren.push(<View key="listItem1" style={{ flexDirection: 'row', alignSelf: 'stretch', flex: 1, padding: 0 }} >
          {childrenArray.map((child, i) =>
            React.cloneElement(child,
              { ...this.getChildProps(child), key: i }))}
        </View>);
      } else {
        newChildren.push(<View key="listItem0" style={{ flexDirection: 'row', alignSelf: 'stretch', flex: 1, padding: 0 }} >
          {childrenArray.map((child, i) =>
             React.cloneElement(child,
               { ...this.getChildProps(child), key: i }))}
        </View>);
      }
    }

    return newChildren;
  }

  render() {
    return (
      <TouchableOpacity
        ref={c => this._root = c}
        {...this.props} activeOpacity={(this.props.button) ? 0.2 : 1}
      >
        {this.renderChildren()}
      </TouchableOpacity>
    );
  }

}

ListItem.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  header: React.PropTypes.bool,
  iconRight: React.PropTypes.bool,
  iconLeft: React.PropTypes.bool,
  button: React.PropTypes.bool,
  itemDivider: React.PropTypes.bool,
};

const StyledListItem = connectStyle('NativeBase.ListItem1', {}, mapPropsToStyleNames)(ListItem);

export {
  StyledListItem as ListItem,
};
