/* @flow */
'use strict';

import React, {Image} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import _ from 'lodash';
import computeProps from '../../Utils/computeProps';
import Icon from './Icon';
import Text from './Text';
import View from './View';
import Button from './Button';
import Thumbnail from './Thumbnail';

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
            itemNote: {
                fontSize: 15,
                color: '#999'
            },
            itemSubNote: {
                fontSize: 15,
                color: '#999'
            },
            thumbnail: {

            },
            fullImage: {
                width: 300,
                height: 300
            }
        }
    }

    isThumbnail() {
        var thumbnailComponentPresent = false;
        React.Children.forEach(this.props.children, function (child) {
            if(child.type == Thumbnail)
                thumbnailComponentPresent = true;
        })

        return thumbnailComponentPresent;
    }

    getChildStyle(child) {
        var mergedStyle = {};
        if(child.type == Icon) {
            return _.merge(mergedStyle, this.getInitialStyle().itemIcon, child.props.style);
        }

        else if(child.type == Text) {
            if(child.props.note && this.isThumbnail())
                return _.merge(mergedStyle, this.getInitialStyle().itemSubNote, child.props.style);
            else if(child.props.note)
                return _.merge(mergedStyle, this.getInitialStyle().itemNote, child.props.style);
            else
                return _.merge(mergedStyle, this.getInitialStyle().itemText, child.props.style);
        }

        else if(child.type == Button) {
            return _.merge(mergedStyle, this.getInitialStyle().itemButton, child.props.style);
        }

        else if(child.type == Thumbnail) {
            return _.merge(mergedStyle, this.getInitialStyle().thumbnail, child.props.style);
        }

        else if(child.type == Image && !Array.isArray(this.props.children))
            return _.merge(mergedStyle, this.getInitialStyle().fullImage, child.props.style);
        else 
            return child.props.style;
    }

    getChildProps(child) {
        var defaultProps = {};
        if(child.type == Image && !Array.isArray(this.props.children)) {
            defaultProps = {
                resizeMode: 'stretch', 
                style: this.getChildStyle(child)
            }
        }
        else if(child.type == Button) {
            defaultProps = {
                small: true,
                style: this.getChildStyle(child)
            }
        }
        else {
            defaultProps = {
                style: this.getChildStyle(child)
            }
        }

        return computeProps(child.props, defaultProps);
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
        if(!this.isThumbnail()) {
            var newChildren = React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, this.getChildProps(child));
            });
        } 
        else {
            var newChildren = [];
            if(!Array.isArray(this.props.children)) {
                newChildren.push(React.cloneElement(this.props.children, this.getChildProps(this.props.children)));
            }
            else {
                var childrenArray = React.Children.toArray(this.props.children);
                newChildren.push(React.cloneElement(childrenArray[0], this.getChildProps(childrenArray[0])));
                newChildren.push(<View style={{backgroundColor: '#777'}}>
                        {childrenArray.slice(1).map((child) => {
                          return React.cloneElement(child, this.getChildProps(child));
                        })}
                    </View>);
            }
            
        }
        
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
