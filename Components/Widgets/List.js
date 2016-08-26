/* @flow */
'use strict';

import React from 'react';
import {View, ListView} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';

export default class ListNB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object,
        dataArray : React.PropTypes.array,
        renderRow : React.PropTypes.func
    }

    getInitialStyle() {
        return {
            list: {

            },
            insetList: {
                borderWidth: 1,
                borderColor: this.getTheme().listBorderColor,
                margin: 15,
                borderBottomWidth: 0
            }
        }
    }


    prepareRootProps() {

        var defaultProps = {
            style: this.props.inset ? this.getInitialStyle().insetList : this.getInitialStyle().list
        };

        return computeProps(this.props, defaultProps);
    }

    renderChildren() {

        var childrenArray = React.Children.toArray(this.props.children);

        var keyIndex = 0;

        childrenArray = childrenArray.map((child) => {
            keyIndex++;
            return React.cloneElement(child, {...child.props, key: keyIndex});
        });

        var lastElement = _.last(childrenArray);



        return _.concat(_.slice(childrenArray, 0, childrenArray.length - 1), lastElement);
    }

    render() {
        if(this.props.dataArray && this.props.renderRow) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            var dataSource = ds.cloneWithRows(this.props.dataArray);
            return (
                <ListView {...this.prepareRootProps()}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={this.props.renderRow} />
            );
        }
        else {
            return(
                <View {...this.prepareRootProps()} >
                {this.renderChildren()}
                </View>
            );
        }
    }
}
