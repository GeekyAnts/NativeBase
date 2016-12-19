/* @flow */
'use strict';

import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import { Icon, Thumbnail } from 'native-base';
import { Text } from './Text';
import { Button } from './Button';
import { Gravatar } from './Gravatar';

class CardItem extends NativeBaseComponent {


    getRightStyle() {
        return {
            right: {
                flex: 1,
                paddingLeft: 10,
                backgroundColor: 'transparent'
            },
            right2: {
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent'
            },
            right3: {
                flex: 1,
                flexDirection: 'column',
                paddingLeft: 10,
                justifyContent: 'flex-start',
                backgroundColor: 'transparent'
            }
        };
    }

    thumbnailPresent() {
        let thumbnailComponentPresent = false;
        React.Children.forEach(this.props.children, (child) => {
            if (child && child.type.displayName === "Styled(Thumbnail)") {
                thumbnailComponentPresent = true;
            }
        });
        return thumbnailComponentPresent;
    }

    gravatarPresent() {
        var gravatarComponentPresent = false;
        React.Children.forEach(this.props.children, function (child) {
            if(child.type.displayName === "Styled(Gravatar)")
                gravatarComponentPresent = true;
        })

        return gravatarComponentPresent;
    }

    imagePresent() {
        let imagePresent = false;
        React.Children.forEach(this.props.children, (child) => {
            if (child && child.type.displayName === "Image") {
                imagePresent = true;
            }
        });

        return imagePresent;
    }

    iconPresent() {
        let iconComponentPresent = false;
        React.Children.forEach(this.props.children, (child) => {
            if (child && child.type.displayName === "Styled(Icon)") {
                iconComponentPresent = true;
            }
        });

        return iconComponentPresent;
    }

    buttonPresent() {
        let buttonComponentPresent = false;
        React.Children.forEach(this.props.children, (child) => {
            if (child && child.type.displayName === "Styled(Button)") {
                buttonComponentPresent = true;
            }
        });

        return buttonComponentPresent;
    }

    ifShowCase() {
      return !!this.props.cardBody;
    }

    notePresent() {
        let notePresent = false;

        React.Children.forEach(this.props.children, (child) => {
            if (child && (child.type.displayName === "Styled(Text)") && child.props.note) {
                notePresent = true;
            }
        });

        return notePresent;
    }

    squareThumbs() {
        let squareThumbs = false;
        if (this.thumbnailPresent() || this.gravatarPresent()) {
            React.Children.forEach(this.props.children, (child) => {
                if (child && child.props.square) {
                    squareThumbs = true;
                }
            });
        }

        return squareThumbs;
    }

    getChildProps(child) {
        let defaultProps = {};
        return computeProps(child.props, defaultProps);
    }


    renderChildren() {
        let newChildren = [];
        let childrenArray = React.Children.toArray(this.props.children);
        childrenArray = childrenArray.filter(child => !!child);
        if ((!this.thumbnailPresent()) && !this.iconPresent()) {
          if(this.imagePresent() && !Array.isArray(this.props.children)) {
            newChildren.push(<View key="img" style={{flex: 1,margin: -12}}>
            {childrenArray.map((child, i) =>
                React.cloneElement(child, { ...this.getChildProps(child), key: i })
            )}
            </View>
          );
          }
          else {
              newChildren.push(
              childrenArray.map((child, i) =>
                  React.cloneElement(child, { ...this.getChildProps(child), key: i })
              )
            );
          }
        } else {
            newChildren = [];
            if (!Array.isArray(this.props.children)) {
                newChildren.push(
                    <View key='cardItem' style={{ justifyContent: 'flex-start' }}>
                        {React.cloneElement(childrenArray)}
                    </View>
                );
            } else {
                newChildren.push(
                    React.cloneElement(childrenArray[0], this.getChildProps(childrenArray[0])));
                newChildren.push(
                    <View key='cardItem' style={this.notePresent() ? this.getRightStyle().right : this.squareThumbs() ? this.getRightStyle().right3 : this.getRightStyle().right2}>
                        {childrenArray.slice(1).map((child, i) =>
                            React.cloneElement(child, { key: i })
                        )}
                    </View>
                );
            }
        }

        return newChildren;
    }


    render() {
        return (
            <TouchableOpacity
                ref={(c) => { this._root = c; }} {...this.props}
                activeOpacity={(this.props.button) ? 0.2 : 1}
            >
                {this.renderChildren()}
            </TouchableOpacity>
        );
    }
}

CardItem.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  header: React.PropTypes.bool,
  cardBody: React.PropTypes.bool,
  footer: React.PropTypes.bool,
  button: React.PropTypes.bool,
};

const StyledCardItem = connectStyle('NativeBase.CardItem', {}, mapPropsToStyleNames)(CardItem);

export {
  StyledCardItem as CardItem,
};
