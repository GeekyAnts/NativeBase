/* @flow */
'use strict';

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import NativeBaseComponent from '../../Base/NativeBaseComponent';
import computeProps from '../../../Utils/computeProps';
import Icon from './../Icon';
import Text from './../Text';
import View from './../View';
import Button from './../Button';
import Thumbnail from './../Thumbnail';
import Gravatar from './../Gravatar';

export default class CardItemNB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object,
        header : React.PropTypes.bool,
        cardBody : React.PropTypes.bool
    }

    getInitialStyle() {
        return {
            listItem: {
                borderBottomWidth: this.getTheme().borderWidth,
                padding: (this.imagePresent() && !this.ifShowCase()) ? 0 :
                    this.getTheme().listItemPadding,
                backgroundColor: this.getTheme().listBg,
                justifyContent: (this.buttonPresent()) ? 'space-between' : 'flex-start',
                flexDirection: (this.thumbnailPresent() || this.gravatarPresent() || this.iconPresent() || (this.notePresent() && this.ifShowCase())) ? 'row' : 'column',
                borderColor: this.getTheme().listBorderColor
            },
            listItemDivider: {
                borderBottomWidth: this.getTheme().borderWidth,
                padding: this.getTheme().listItemPadding,
                backgroundColor: 'transparent',
                paddingVertical: this.getTheme().listItemPadding + 2,
                justifyContent: (this.buttonPresent()) ? 'space-between' : 'flex-start',
                flexDirection: 'row',
                borderColor: 'transparent'
            },
            itemText: {
                fontSize: this.ifShowCase() ? 14 : 15,
                marginTop: this.ifShowCase() ? 10 : 0,
                color: this.getContextForegroundColor(),
                flex: 1
            },
            dividerItemText: {
                fontSize: 17,
                fontWeight: '500',
                color: this.getContextForegroundColor(),
                flex: 1
            },
            itemIcon: {
                fontSize: this.getTheme().iconFontSize,
                color: this.getContextForegroundColor()
            },
            itemNote: {
                fontSize: 15,
                color: this.getTheme().listNoteColor,
                fontWeight: '100',
                flex: 1
            },
            itemSubNote: {
                fontSize: 15,
                color: '#999'
            },
            thumbnail: {
                alignSelf: 'center'
            },
            gravatar: {
                alignSelf: 'center'
            },
            fullImage: {
                alignSelf: 'stretch',
                height: this.ifShowCase() ? 120 : 300
            }
        };
    }
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
            if (child && _.get(child, 'type', null) === Thumbnail) {
                thumbnailComponentPresent = true;
            }
        });

        return thumbnailComponentPresent;
    }

    gravatarPresent() {
        var gravatarComponentPresent = false;
        React.Children.forEach(this.props.children, function (child) {
            if(_.get(child, 'type', null) == Gravatar)
                gravatarComponentPresent = true;
        })

        return gravatarComponentPresent;
    }

    imagePresent() {
        let imagePresent = false;
        React.Children.forEach(this.props.children, (child) => {
            if (child && _.get(child, 'type', null) === Image) {
                imagePresent = true;
            }
        });

        return imagePresent;
    }

    iconPresent() {
        let iconComponentPresent = false;
        React.Children.forEach(this.props.children, (child) => {
            if (child && _.get(child, 'type', null) === Icon) {
                iconComponentPresent = true;
            }
        });

        return iconComponentPresent;
    }

    buttonPresent() {
        let buttonComponentPresent = false;
        React.Children.forEach(this.props.children, (child) => {
            if (child && _.get(child, 'type', null) === Button) {
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
            if (child && (_.get(child, 'type', null) === Text) && child.props.note) {
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
        if (_.get(child, 'type', null) === Image && !Array.isArray(this.props.children)) {
            defaultProps = {
                resizeMode: 'cover',
                style: this.getInitialStyle().fullImage
            };
        } else
          if (_.get(child, 'type', null) === Button) {
            defaultProps = {
                style: this.getInitialStyle().itemButton
            };
        } else
            if (_.get(child, 'type', null) === Text) {
                if ((this.props.header) || (this.props.footer)) {
                    defaultProps = {
                        style: this.getInitialStyle().dividerItemText
                    };
                } else if (child.props.note && (this.thumbnailPresent() || this.gravatarPresent())) {
                    defaultProps = {
                        style: this.getInitialStyle().itemSubNote
                    };
                } else if (child.props.note) {
                    defaultProps = {
                        style: this.getInitialStyle().itemNote
                    };
                } else {
                    defaultProps = {
                        style: this.getInitialStyle().itemText
                    };
                }
        } else if (_.get(child, 'type', null) === Icon) {
            defaultProps = {
                style: this.getInitialStyle().itemIcon
            };
        } else if (_.get(child, 'type', null) === Thumbnail) {
            defaultProps = {
                style: this.getInitialStyle().thumbnail
            };
        } else if(_.get(child, 'type', null) == Gravatar) {
            defaultProps = {
                style: this.getInitialStyle().gravatar
            };
        } else if (_.get(child, 'type', null) === Image) {
            defaultProps = {
                style: this.getInitialStyle().fullImage
            };
        } else {
            defaultProps = {
                foregroundColor: this.getContextForegroundColor()
            };
        }

        return computeProps(child.props, defaultProps);
    }

    prepareRootProps() {
        let defaultProps = {};

        if ((this.props.header) || (this.props.footer)) {
            defaultProps = {
                style: this.getInitialStyle().listItemDivider
            };
        } else {
            defaultProps = {
                style: this.getInitialStyle().listItem
            };
        }

        return computeProps(this.props, defaultProps);
    }




    renderChildren() {
        let newChildren = [];
        let childrenArray = React.Children.toArray(this.props.children);
        childrenArray = childrenArray.filter(child => !!child);

        if ((!this.thumbnailPresent() || !this.gravatarPresent()) && !this.iconPresent()) {
            newChildren = childrenArray.map((child, i) =>
                React.cloneElement(child, { ...this.getChildProps(child), key: i })
            );
        } else {
            newChildren = [];
            if (!Array.isArray(this.props.children)) {
                newChildren.push(
                    <View key='cardItem' style={{ justifyContent: 'flex-start' }}>
                        {React.cloneElement(childrenArray, this.getChildProps(childrenArray))}
                    </View>
                );
            } else {
                newChildren.push(
                    React.cloneElement(childrenArray[0], this.getChildProps(childrenArray[0])));
                newChildren.push(
                    <View key='cardItem' style={this.notePresent() ? this.getRightStyle().right : this.squareThumbs() ? this.getRightStyle().right3 : this.getRightStyle().right2}>
                        {childrenArray.slice(1).map((child, i) =>
                            React.cloneElement(child, { ...this.getChildProps(child), key: i })
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
                ref={(c) => { this._root = c; }} {...this.prepareRootProps()}
                activeOpacity={(this.props.button) ? 0.2 : 1}
            >
                {this.renderChildren()}
            </TouchableOpacity>
        );
    }
}
