/* @flow */
'use strict';

import React from 'react';
import {View, ListView} from 'react-native';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

class Card extends NativeBaseComponent {


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
                <ListView {...this.props}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={this.props.renderRow} />
            );
        }
        return(
            <View ref={c => this._root = c} {...this.props} >
                {this.renderChildren()}
            </View>
        );
    }

}

Card.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
  dataArray: React.PropTypes.object,
  renderRow: React.PropTypes.object,
};

const StyledCard = connectStyle('NativeBase.Card', {}, mapPropsToStyleNames)(Card);

export {
  StyledCard as Card,
};
