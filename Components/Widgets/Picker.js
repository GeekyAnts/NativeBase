/* @flow */
'use strict';

import React, {Picker, PixelRatio} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

export default class PickerNB extends NativeBaseComponent {
    static childContextTypes = {
        theme: React.PropTypes.object
    }
    
    getChildContext() {
        return {theme: this.props.theme ? this.props.theme : this.getTheme()};
    }
    
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