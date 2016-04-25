/* @flow */
'use strict';

import React from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Icon from './Icon';
import Text from './Text';
import View from './View';
import Button from './Button';

export default class ListItemNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            listItem: {
                borderBottomWidth: 1,
                padding: 7
            },
            listItemDivider: {
                borderBottomWidth: 1,
                padding: 7,
                backgroundColor: '#ddd'
            },
            itemText: {
                fontSize: 25
            },
            itemIcon: {
                fontSize: 25,
                color: 'black'
            },
            itemButton: {
                width: 50
            },
            itemNote: {
                fontSize: 15,
                color: '#999'
            }
        }
    }

    getChildStyle(child) {
        var mergedStyle = {};
        if(child.type == Icon) {
            return _.merge(mergedStyle, this.getInitialStyle().itemIcon, child.props.style);
        }

        else if(child.type == Text) {
            if(child.props.note)
                return _.merge(mergedStyle, this.getInitialStyle().itemNote, child.props.style);
            else 
                return _.merge(mergedStyle, this.getInitialStyle().itemText, child.props.style);
        }

        else if(child.type == Button) {
            return _.merge(mergedStyle, this.getInitialStyle().itemButton, child.props.style);
        }

        else 
            return child.props.style;
    }

    prepareRootProps() {
        if(this.props.itemDivider)
            var defaultProps = {
                style: this.getInitialStyle().listItemDivider
            };
        else 
            var defaultProps = {
                style: this.getInitialStyle().listItem
            };

        console.log(computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }

    renderChildren() {
        var newChildren = React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {style: this.getChildStyle(child)})
        });

        console.log(newChildren);

        return newChildren;
    }
    
    render() { 
        return(
          <View {...this.prepareRootProps()} >
            {this.renderChildren()}
          </View>
        );
    }

}
