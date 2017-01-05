/* @flow */
'use strict';

import React, { cloneElement } from 'react';
import { Platform } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from './Button';
import View from './View';
import Title from './Title';
import InputGroup from './InputGroup';
import Subtitle from './Subtitle';

const baseButtonStyle = {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
};
const iOSButtonStyle = Object.assign({}, baseButtonStyle, {
    marginLeft: -14
});
const iOSHeaderBtnListStyle = Object.assign({}, baseButtonStyle, {
    marginRight: -14
});
const iOSSearchBarSearchBtnStyle = Object.assign({}, baseButtonStyle, {
    justifyContent: 'center',
    marginRight: -14
});
const androidHeaderBtnStyle = Object.assign({}, baseButtonStyle, {
    marginLeft: -10,
    marginRight: 12
});
const androidHeaderBtnListStyle = Object.assign({}, baseButtonStyle, {
    marginRight: -7
});


const iOSSingleButtonTitleStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 13,
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center'
};
const baseTitleStyle = {
    flex: 3,
    alignSelf: 'stretch'
};
const androidHeaderTitleStyle = Object.assign({}, baseTitleStyle, {
    justifyContent: 'center'
});
const baseSearchBarStyle = {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: -7
};
const androidSearchBarStyle = Object.assign({}, baseSearchBarStyle, {
    marginLeft: -8,
    marginRight: -8
});

export default class Header extends NativeBaseComponent {

    propTypes: {
        searchBar : React.PropTypes.bool,
        rounded : React.PropTypes.bool,
        style : React.PropTypes.object,
        iconRight: React.PropTypes.bool
    };

    getInitialStyle () {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                justifyContent: (!Array.isArray(this.props.children) && Platform.OS == 'ios') ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: (!Array.isArray(this.props.children) && Platform.OS == 'android') ? 30 : undefined,
                paddingHorizontal: 15,
                paddingTop: (Platform.OS === 'ios' ) ? 15 : 0,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                height: this.getTheme().toolbarHeight,
                elevation: 3,
                position: 'relative'
            },
            iosToolbarSearch: {
                backgroundColor: this.getTheme().toolbarInputColor,
                borderRadius: this.props.rounded ? 25 : 2,
                height: 30,
                borderColor: 'transparent',
                flex: 1
            },
            androidToolbarSearch: {
                backgroundColor: '#fff',
                borderRadius: 2,
                borderColor: 'transparent',
                elevation: 2,
                flex: 1
            },
            toolbarButton: {
                paddingHorizontal: 15
            }
        }
    }

    renderChildren () {
        if (!Array.isArray(this.props.children)) {
            return this.props.children;
        }

        const children = React.Children.toArray(this.props.children);
        if(children.length === 1) {
            return children;
        }

        const buttons = children.filter((item) => item.type == Button);
        const title = children.filter((item) => item.type == Title);
        const subtitle = children.filter((item) => item.type == Subtitle);
        const input = children.filter((item) => item.type == InputGroup);

        if (buttons.length == 1 && this.props.iconRight) {
            if (Platform.OS === 'ios') {
                return this.renderIOSSingleButton(title, subtitle, buttons)
            }
            return this.renderAndroidSingleButton(title, buttons)
        }

        if (this.props.searchBar) {
            if (Platform.OS === 'ios') {
                return this.renderIOSSearchBar(input, buttons)
            }
            return this.renderAndroidSearchBar(input)
        }

        if (Platform.OS === 'ios') {
            return this.renderIOSHeader(title, subtitle, buttons)
        }
        return this.renderAndroidHeader(buttons, title)
    }

    renderAndroidHeader (buttons, title) {
        const elements = [];
        elements.push(
            <View key='btn1' style={androidHeaderBtnStyle}>
                {cloneElement(buttons[0], {
                    style: this.getInitialStyle().toolbarButton,
                    header: true,
                    textStyle: { color: this.getTheme().toolbarTextColor }
                })}
            </View>
        );
        elements.push(<View key='title' style={androidHeaderTitleStyle}>{title[0]}</View>);

        for (let i = 1; i < buttons.length; i++) {
            elements.push(
                <View key={'btn' + (i + 1)} style={androidHeaderBtnListStyle}>
                    {cloneElement(buttons[i], {
                        style: this.getInitialStyle().toolbarButton,
                        header: true,
                        textStyle: { color: this.getTheme().toolbarTextColor }
                    })}
                </View>
            );
        }
        return elements;
    }

    renderIOSHeader (title, subtitle, buttons) {
        const elements = [];
        elements.push(<View key='title' style={iOSSingleButtonTitleStyle}>{[ title[0], subtitle[0] ]}</View>);
        elements.push(
            <View key='btn1' style={iOSButtonStyle}>
                {cloneElement(buttons[0], {
                    color: this.getTheme().iosToolbarBtnColor,
                    style: this.getInitialStyle().toolbarButton
                })}
            </View>
        );

        elements.push(<View key='title2' style={baseTitleStyle}/>);

        if (buttons.length > 1) {
            for (let i = 1; i < buttons.length; i++) {
                elements.push(
                    <View key={'btn' + (i + 1)} style={iOSHeaderBtnListStyle}>
                        {cloneElement(buttons[i], {
                            color: this.getTheme().iosToolbarBtnColor,
                            style: this.getInitialStyle().toolbarButton
                        })}
                    </View>
                );
            }
        }

        return elements;
    }

    renderAndroidSearchBar (input) {
        return (
            <View key='search' style={androidSearchBarStyle}>
                {cloneElement(input[0], {
                    style: this.getInitialStyle().androidToolbarSearch,
                    atoolbar: true
                })}
            </View>
        );
    }

    renderIOSSearchBar (input, buttons) {
        const elements = [];

        elements.push(
            <View key='search' style={baseSearchBarStyle}>
                {cloneElement(input[0], {
                    style: this.getInitialStyle().iosToolbarSearch,
                    toolbar: true,
                    key: 'inp'
                })}
            </View>
        );
        elements.push(
            <View key='searchBtn' style={iOSSearchBarSearchBtnStyle}>
                {cloneElement(buttons[0], {
                    color: this.getTheme().iosToolbarBtnColor,
                    style: this.getInitialStyle().toolbarButton
                })}
            </View>
        );

        return elements;
    }

    renderAndroidSingleButton (title, buttons) {
        const elements = [];

        elements.push(
            <View key='title' style={androidHeaderTitleStyle}>
                {[ title[0] ]}
            </View>
        );
        elements.push(
            <View key='btn1' style={androidHeaderBtnStyle}>
                {cloneElement(buttons[0], {
                    style: this.getInitialStyle().toolbarButton,
                    header: true,
                    textStyle: { color: this.getTheme().toolbarTextColor }
                })}
            </View>
        );

        return elements;
    }

    renderIOSSingleButton (title, subtitle, buttons) {
        const elements = [];
        elements.push(<View key='title' style={iOSSingleButtonTitleStyle}>{[ title[0], subtitle[0] ]}</View>);
        elements.push(<View key='title2' style={baseTitleStyle}/>);
        elements.push(
            <View key='btn1' style={iOSButtonStyle}>
                {cloneElement(buttons[0], {
                    color: this.getTheme().iosToolbarBtnColor,
                    style: this.getInitialStyle().toolbarButton
                })}
            </View>
        );

        return elements;
    }

    render () {
        const rootProps = computeProps(this.props, {
            style: this.getInitialStyle().navbar
        });
        return (
            <View {...rootProps}>
                {this.renderChildren()}
            </View>
        );
    }
}
