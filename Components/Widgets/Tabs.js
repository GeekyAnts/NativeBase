/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import ScrollableTabView from './../vendor/react-native-scrollable-tab-view';

export default class TabNB extends NativeBaseComponent {
    propTypes: {
        style : React.PropTypes.object
    }

    constructor(props) {
        super(props);

        this.goToPage = this.goToPage.bind(this);
    }

    goToPage(page) {
        this._scrollableTabView.goToPage(page);
    }

    getInitialStyle() {
        return {
            tab: {
                flex: 1
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().tab
        };

        return computeProps(this.props, defaultProps);

    }

    render() {
    var children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    return(
      <ScrollableTabView ref={(c) => {this._scrollableTabView = c; this._root = c;}} {...this.prepareRootProps()} >
        {children.filter(child => child)}
      </ScrollableTabView>
    );
    }

}
