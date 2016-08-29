/* @flow */
'use strict';

import React from 'react';
import {Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from './Button';
import IconNB from './Icon';
import View from './View';
import Title from './Title';
import InputGroup from './InputGroup';
import Subtitle from './Subtitle';
import _ from 'lodash';

export default class Header extends NativeBaseComponent {

    propTypes: {
        searchBar : React.PropTypes.bool,
        rounded : React.PropTypes.bool,
        style : React.PropTypes.object
    }

    constructor(props) {
        super(props);
        this.isChildrenArray = Array.isArray(props.children);
        this.hasLeftBtn = this.detectButtonPosition('left');
        this.hasRightBtn = this.detectButtonPosition('right');
        this.hasBothBtn = this.hasLeftBtn && this.hasRightBtn;

        this.leftBtnType = this.detectButtonType('left');
        this.rightBtnType = this.detectButtonType('right');
    }

    justifyNavbarContent() {
        switch (true) {
            case (this.hasLeftBtn && !this.hasRightBtn):
                return 'flex-start';
            case (!this.hasLeftBtn && this.hasRightBtn):
                return 'flex-end';
            case (this.hasBothBtn && this.isChildrenArray):
                return 'space-between';
            default:
                return 'center';
        }
    }

    detectButtonPosition(pos) {
        // Filter valid children only
        const chdn = _.filter(this.props.children, function(item) {
            return item && item.type;
        });
        switch (true) {
            case (pos == 'left' && this.checkType(chdn[0], Button) && this.checkType(chdn[1], Title)):
            case (pos == 'left' && chdn[0] && chdn[0].props.btnLeft || chdn[1] && chdn[1].props.btnLeft || chdn[2] && chdn[2].props.btnLeft):
                return pos == 'left';
            case (pos == 'right' && this.checkType(chdn[0], Button) && this.checkType(chdn[1], Title) && this.checkType(chdn[2], Button)):
            case (pos == 'right' && this.checkType(chdn[0], Title) && this.checkType(chdn[1], Button)):
            case (pos == 'right' && chdn[0] && chdn[0].props.btnRight || chdn[1] && chdn[1].props.btnRight || chdn[2] && chdn[2].props.btnRight):
                return pos == 'right';
            default:
                return false;
        }
    }

    checkType(item, type) {
        return item && item.type == type;
    }

    getBtnType(btn) {
        if (!Array.isArray(btn.props.children)) {
            const children = btn.props.children;
            switch (true) {
                case (typeof children == 'string'):
                    return 'label';
                case (children.type == IconNB):
                    return 'icon';
            }
        } else {
            let values = _.filter(btn.props.children, function(button) {
                return !!button;
            });
            switch (true) {
                case (values.length == 1 && values[0].type == IconNB):
                    return 'icon';
                case (values.length == 1 && typeof values[0] == 'string'):
                    return 'label';
                case (
                    values.length == 2 &&
                    (
                        (values[0].type == IconNB && typeof values[1] == 'string') ||
                        (values[1].type == IconNB && typeof values[0] == 'string')
                    )
                ):
                    return 'both';
                default:
                    return 'none';
            }
        }
    }

    detectButtonType(pos) {
        if (this.isChildrenArray) {
            // Remove title
            const buttons = _.filter(this.props.children, function(item) {
                return item && item.type !== Title;
            });
            // Check type
            if (buttons.length > 0) {
                switch (true) {
                    case pos == 'left' && this.hasLeftBtn && !this.hasRightBtn:
                    case pos == 'right' && !this.hasLeftBtn && this.hasRightBtn:
                        return this.getBtnType(buttons[0]);
                    case pos == 'right' && this.hasLeftBtn && this.hasRightBtn:
                        return this.getBtnType(buttons[1]);
                    default:
                        return 'none';
                }
            }
            return 'none';
        }
        return 'none';
    }

    adjustMargins() {
        switch (true) {
            case (this.hasLeftBtn && !this.hasRightBtn && this.leftBtnType == 'icon'):
            case (this.hasLeftBtn && !this.hasRightBtn && this.leftBtnType == 'label'):
                return { marginLeft: -14 };

            case (this.hasLeftBtn && !this.hasRightBtn && this.leftBtnType == 'both'):
                return { marginLeft: -21 };

            case (!this.hasLeftBtn && this.hasRightBtn && this.rightBtnType == 'icon'):
            case (!this.hasLeftBtn && this.hasRightBtn && this.rightBtnType == 'label'):
                return { marginRight: -14 };

            case (!this.hasLeftBtn && this.hasRightBtn && this.rightBtnType == 'both'):
                return { marginRight: -14 };

            case (this.hasBothBtn && this.leftBtnType == 'label' && this.rightBtnType == 'label'):
            case (this.hasBothBtn && this.leftBtnType == 'both' && this.rightBtnType == 'both'):
            case (this.hasBothBtn && this.leftBtnType == 'label' && this.rightBtnType == 'both'):
            case (this.hasBothBtn && this.leftBtnType == 'both' && this.rightBtnType == 'label'):
                return { marginLeft: -21, marginRight: -21 };

            case (this.hasBothBtn && this.leftBtnType == 'label' && this.rightBtnType == 'icon'):
            case (this.hasBothBtn && this.leftBtnType == 'both' && this.rightBtnType == 'icon'):
                return { marginLeft: -21, marginRight: -14 };

            case (this.hasBothBtn && this.leftBtnType == 'icon' && this.rightBtnType == 'both'):
            case (this.hasBothBtn && this.leftBtnType == 'icon' && this.rightBtnType == 'label'):
                return { marginLeft: -14, marginRight: -21 };

            case (this.hasBothBtn && this.leftBtnType == 'icon' && this.rightBtnType == 'icon'):
            default:
                return { marginLeft: -14, marginRight: -21 };
        }
    }

    getInitialStyle() {
        return {
            navbar: {
                backgroundColor: this.getTheme().toolbarDefaultBg,
                flexDirection: 'row',
                justifyContent: this.justifyNavbarContent(),
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingTop: (Platform.OS === 'ios' ) ? 15 : 0,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
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

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().navbar
        };

        return computeProps(this.props, defaultProps);

    }

    renderChildren() {
        if (!Array.isArray(this.props.children)) {
            return this.props.children;
        }

        else if (Array.isArray(this.props.children)) {
            var newChildren = [];
            var childrenArray = React.Children.toArray(this.props.children);

            var buttons = [];
            buttons = _.remove(childrenArray, function (item) {
                if (item && item.type == Button) {
                    return true;
                }
            });

            var title = [];
            title = _.remove(childrenArray, function (item) {
                if (item && item.type == Title) {
                    return true;
                }
            });

            var subtitle = [];
            subtitle = _.remove(childrenArray, function (item) {
                if (item && item.type == Subtitle) {
                    return true;
                }
            });

            var input = [];
            input = _.remove(childrenArray, function (item) {
                if (item && item.type == InputGroup) {
                    return true;
                }
            });


            if (this.props.searchBar) {
                if (Platform.OS === 'ios') {
                    newChildren.push(<View key='search' style={{
                        flex: 1,
                        alignSelf: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        marginLeft: -7
                    }}>
                        {React.cloneElement(input[0], {
                            style: this.getInitialStyle().iosToolbarSearch,
                            toolbar: true,
                            key: 'inp'
                        })}
                    </View>)
                    if (buttons.length > 0) {
                        newChildren.push(<View key='searchBtn' style={{
                            alignSelf: 'flex-start',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginRight: -14
                        }}>
                            {React.cloneElement(buttons[0], {
                                color: this.getTheme().iosToolbarBtnColor,
                                style: this.getInitialStyle().toolbarButton
                            })}
                        </View>)
                    }
                } else {
                    newChildren.push(<View key='search' style={{
                        flex: 1,
                        alignSelf: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        marginLeft: -8,
                        marginRight: -8
                    }}>
                        {React.cloneElement(input[0], {
                            style: this.getInitialStyle().androidToolbarSearch,
                            atoolbar: true
                        })}
                    </View>)
                }
            }
            else {
                if (Platform.OS === 'ios') {
                    newChildren.push(<View key='title' style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 13,
                        bottom: 0,
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}>
                        {[title[0], subtitle[0]]}
                    </View>)
                    if (buttons.length > 0) {
                        newChildren.push(<View key='btn1' style={[{
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                        }, this.adjustMargins()]}>
                            {React.cloneElement(buttons[0], {
                                color: this.getTheme().iosToolbarBtnColor,
                                style: this.getInitialStyle().toolbarButton
                            })}
                        </View>)
                    }
                    if (buttons.length > 1) {
                        for (let i = 1; i < buttons.length; i++) {
                            newChildren.push(<View key={'btn' + (i + 1)} style={[{
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                flexDirection: 'row'
                            }, this.adjustMargins()]}>
                                {React.cloneElement(buttons[i], {
                                    color: this.getTheme().iosToolbarBtnColor,
                                    style: this.getInitialStyle().toolbarButton
                                })}
                            </View>)
                        }
                    }
                }
                else {
                    if (buttons.length > 0) {
                        newChildren.push(<View key='btn1' style={{
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            marginLeft: -10,
                            marginRight: 12
                        }}>
                            {React.cloneElement(buttons[0], {
                                style: this.getInitialStyle().toolbarButton,
                                header: true,
                                textStyle: {color: this.getTheme().toolbarTextColor}
                            })}
                        </View>)
                    }
                    newChildren.push(<View key='title' style={{flex: 3, alignSelf: 'stretch', justifyContent: 'center'}}>{[title[0]]}</View>)
                    for (let i = 1; i < buttons.length; i++) {
                        newChildren.push(<View key={'btn' + (i + 1)} style={{
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            marginRight: -7
                        }}>
                            {React.cloneElement(buttons[i], {
                                style: this.getInitialStyle().toolbarButton,
                                header: true,
                                textStyle: {color: this.getTheme().toolbarTextColor}
                            })}
                        </View>)
                    }
                }

            }
            return newChildren;
        }
    }

    render() {
        return (
            <View {...this.prepareRootProps()} >
                {this.renderChildren()}
            </View>
        );
    }
}