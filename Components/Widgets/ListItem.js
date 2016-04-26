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
                   padding: 8,
                   borderRadius: 1,
                   paddingRight: 10,
                   paddingLeft: 10,
                   flex: 1,
                   justifyContent: (this.buttonPresent()) ? 'space-between' : 'flex-start',
                   flexDirection: 'row',
                   alignItems: 'center',
                   borderColor: this.getTheme().listBorderColor
               },
               listItemDivider: {
                   borderBottomWidth: 1,
                   padding: 7,
                   backgroundColor: '#ddd',
                   flex: 1,
                   justifyContent: (this.buttonPresent()) ? 'space-between' : 'flex-start',
                   flexDirection: 'row',
                   borderColor: this.getTheme().listBorderColor
               },
               itemText: {
                   fontSize: 18,  
               },
               itemIcon: {
                   fontSize: 27,
                   color: 'black'
               },
               itemNote: {
                   fontSize: 15,
                   color: '#58575C',
                   alignSelf: 'center',
                   fontWeight: '100',
                   flex: 1,
                   textAlign: 'right',

               },
               itemSubNote: {
                   fontSize: 15,
                   color: '#999'
               },
               thumbnail: {
                   alignSelf: 'center',
               },
               fullImage: {
                   width: 300,
                   height: 300
               }
           }
       }
    getRightStyle() {
        return {
            right : {
                flex: 1,
                paddingLeft: 10
                
            }
        }
    }

    thumbnailPresent() {
        var thumbnailComponentPresent = false;
        React.Children.forEach(this.props.children, function (child) {
            if(child.type == Thumbnail)
                thumbnailComponentPresent = true;
        })

        return thumbnailComponentPresent;
    }

    iconPresent() {
        var iconComponentPresent = false;
        React.Children.forEach(this.props.children, function (child) {
            if(child.type == Icon)
                iconComponentPresent = true;
        })

        return iconComponentPresent;
    }

    buttonPresent() {
        var buttonComponentPresent = false;
        React.Children.forEach(this.props.children, function (child) {
            if(child.type == Button)
                buttonComponentPresent = true;
        })

        return buttonComponentPresent;
    }

    getChildProps(child) {
        var defaultProps = {};
        if(child.type == Image && !Array.isArray(this.props.children)) {
            defaultProps = {
                resizeMode: 'stretch', 
                style: this.getInitialStyle().fullImage
            }
        }
        else if(child.type == Button) {
            defaultProps = {
                small: true,
                style: this.getInitialStyle().itemButton
            }
        }
        else if(child.type == Text) {
            if(child.props.note && this.thumbnailPresent()) {
                defaultProps = {
                    style: this.getInitialStyle().itemSubNote
                }
            }
            else if(child.props.note) {
                defaultProps = {
                    style: this.getInitialStyle().itemNote
                }
            }
            else {
                defaultProps = {
                    style: this.getInitialStyle().itemText
                }
            }
        }
        else if(child.type == Icon) {
            defaultProps = {
                style: this.getInitialStyle().itemIcon
            }
        }
        else if(child.type == Thumbnail) {
            defaultProps = {
                style: this.getInitialStyle().thumbnail
            }
        }
        else {
            defaultProps = {
                style: {}
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
        if(!this.thumbnailPresent() && !this.iconPresent()) {
            var newChildren = React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, this.getChildProps(child));
            });
        } 
        else {
            var newChildren = [];
            if(!Array.isArray(this.props.children)) {
                newChildren.push(
                    <View>
                        {React.cloneElement(this.props.children, this.getChildProps(this.props.children))}
                    </View>
                );
            }
            else {
                var childrenArray = React.Children.toArray(this.props.children);
                newChildren.push(React.cloneElement(childrenArray[0], this.getChildProps(childrenArray[0])));
                newChildren.push(<View style={this.getRightStyle().right}>
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