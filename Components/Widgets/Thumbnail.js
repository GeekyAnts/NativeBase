/* @flow */
'use strict';

import React, {Image} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import _ from 'lodash';

export default class ThumbnailNB extends NativeBaseComponent {

    getInitialStyle() {
        return {
            thumbnail: {
                borderRadius: 15,
                width: 30,
                height: 30
            }
        }
    }

    prepareRootProps() {
        var thumbnailStyle = {};
        if(this.props.circular) {
            thumbnailStyle.width = this.props.size;
            thumbnailStyle.height = this.props.size;
            thumbnailStyle.borderRadius = this.props.size/2;
        }
        else if(this.props.square) {
            thumbnailStyle.width = this.props.size;
            thumbnailStyle.height = this.props.size;
            thumbnailStyle.borderRadius = 0;
        }

        var defaultProps = {
            style: _.merge(this.getInitialStyle().thumbnail, thumbnailStyle)
        };

        return computeProps(this.props, defaultProps);
    }
    
    render() { 
        return(
            <Image {...this.prepareRootProps()}/>
        );
    }
}
