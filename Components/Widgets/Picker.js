/* @flow */
'use strict';

import React from 'react';
import {Picker} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

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
        return(
            <Picker {...this.prepareRootProps()}>
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
