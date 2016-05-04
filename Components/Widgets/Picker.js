/* @flow */
'use strict';

import React, {Picker, PixelRatio} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';

export default class PickerNB extends NativeBaseComponent {
    
    getInitialStyle() {
        return {
            picker: {
                backgroundColor: '#bbb'
            },
            pickerItem: {
                color: 'teal'
            }
        }
    }
    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().picker,
            itemStyle: this.getInitialStyle().pickerItem
        };

        console.log(computeProps(this.props, defaultProps));

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
    },
});