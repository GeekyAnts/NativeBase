/* @flow */
'use strict';

import React from 'react';
import {Picker} from 'react-native';
import NativeBaseComponent from '../../Base/NativeBaseComponent';
import computeProps from '../../../Utils/computeProps';

export default class PickerNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            picker: {

            },
            pickerItem: {

            }
        }
    }
    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().picker,
            itemStyle: this.getInitialStyle().pickerItem
        };

        return computeProps(this.props, defaultProps);

    }

    render() {
        const {style, itemStyle, inlineLabel, iosHeader, children, ...otherProps } = this.prepareRootProps(); //eslint-disable-line
        let additionalProps = {};
        if(inlineLabel) {
          additionalProps = { flex: 1};
        }
        return(
            <Picker ref={c => this._root = c} style={[style, additionalProps]} itemStyle={[itemStyle]} {...otherProps}>
                {this.props.children}
            </Picker>
        );
    }

}

PickerNB.Item = React.createClass({

    render: function() {
        return(
            <Picker.Item {...this.props()}/>
        );
    }
});
