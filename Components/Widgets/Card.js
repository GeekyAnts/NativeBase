/* @flow */
'use strict';

import React from 'react';
import {View, ListView} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class CardNB extends NativeBaseComponent {

    propTypes: {
        style : React.PropTypes.object
    }

    getInitialStyle() {
        return {
            card: {
                flex: 1,
                borderWidth: this.getTheme().borderWidth,
                borderRadius: this.getTheme().borderRadiusBase,
                borderColor: this.getTheme().listBorderColor,
                flexWrap: 'wrap',
                borderBottomWidth: 0,
                backgroundColor: this.props.transparent? 'transparent' : this.getTheme().cardDefaultBg,
                shadowColor: this.props.transparent ? undefined : '#000',
                shadowOffset: this.props.transparent ? undefined : {width: 0, height: 2},
                shadowOpacity: this.props.transparent ? undefined : 0.1,
                shadowRadius: this.props.transparent ? undefined : 1.5,
                elevation: this.props.transparent ? undefined : 1
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().card
        };

        return computeProps(this.props, defaultProps);

    }

    renderChildren() {
        var childrenArray = React.Children.map(this.props.children, (child) => {
            return child;
        });

        return childrenArray;
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
        return(
            <View {...this.prepareRootProps()} >
                {this.renderChildren()}
            </View>
        );
    }

}
