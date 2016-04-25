/* @flow */
'use strict';

import React, {Image, View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';

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

        console.log(computeProps(this.props, defaultProps));

        return computeProps(this.props, defaultProps);

    }
    
    render() { 
        return(
              <Image {...this.prepareRootProps()}/>
        );
    }

}
