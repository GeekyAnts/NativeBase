/* @flow */
'use strict';

import React, {Image} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Icon from './Icon';
import Text from './Text';
import View from './View';
import Button from './Button';
import Thumbnail from './Thumbnail';
import _ from 'lodash';

export default class ListItemNB extends NativeBaseComponent {
    
    getInitialStyle() {
           return {
               listItem: {
                   borderBottomWidth: this.getTheme().borderWidth,
                   padding: this.getTheme().listItemPadding,
                   borderRadius: 1,
                   flex: 1,
                   justifyContent: ((this.isIconRight() && !this.isIconLeft()) || (this.isIconRight() && this.isIconLeft())) ? 'space-between' : 'flex-start',
                   flexDirection: 'row',
                   alignItems: 'center',
                   borderColor: this.getTheme().listBorderColor,
               },
               listItemDivider: {
                   borderBottomWidth: this.getTheme().borderWidth,
                   padding: this.getTheme().listItemPadding,
                   backgroundColor: this.getTheme().listDividerBg,
                   flex: 1,
                   justifyContent: (this.buttonPresent()) ? 'space-between' : 'flex-start',
                   flexDirection: 'row',
                   borderColor: this.getTheme().listBorderColor
               },
               itemText: {
                   fontSize: 16, 
                   paddingLeft: (this.isIconLeft()) ? 10 : 0,
               },
               dividerItemText: {
                   fontSize: 16,  
                   fontWeight: '500'
               },
               itemIcon: {
                   fontSize: this.getTheme().iconFontSize,
                   color: 'black'
               },
               itemNote: {
                   fontSize: 15,
                   color: this.getTheme().listNoteColor,
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
               },
               itemButton: {}
           }
       }
    getRightStyle() {
        return {
            right : {
                flex: 1,
                paddingLeft: 10
                
            },
            right2 : {
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'space-between'
                
            },
            right3 : {
                flex: 1,
                flexDirection: 'column',
                paddingLeft: 10,
                alignSelf: 'flex-start'
                
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
            if (this.props.itemDivider) {
              defaultProps = {
                    style: this.getInitialStyle().dividerItemText
                }
            } else {
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

        
        return computeProps(this.props, defaultProps);

    }

   
    notePresent() {

          var notePresent = false;
              React.Children.forEach(this.props.children, function (child) {
                  if(child.type == Text && child.props.note)
                      notePresent = true;
              })   
          return notePresent;
      

    }

    isIconLeft() {
        var isIconLeft = false;
        if (this.props['icon-left']) {
            var isIconLeft = true;
        }
        return isIconLeft;
    }



    isIconRight() {
        var isIconRight = false;
        if (this.props['icon-right']) {
            var isIconRight = true;
        }
        return isIconRight;
    }

    squareThumbs() {
          var squareThumbs = false;
          if (this.thumbnailPresent()) {
              React.Children.forEach(this.props.children, function (child) {
                  if(child.props.square)
                      squareThumbs = true;
              })
            
          } 
          return squareThumbs;
      

    }

    renderChildren() {
        
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

                if (this.isIconLeft() && !this.isIconRight()) {
                    var iconElement = [];
                    iconElement = _.remove(childrenArray, function(item) {
                                                if(item.type == Icon) {
                                                    return true;
                                                }  
                                            });
                    newChildren.push(React.cloneElement(iconElement[0], this.getChildProps(iconElement[0])));
                    newChildren.push(<View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}} >
                                        {childrenArray.map((child) => {
                                          return React.cloneElement(child, this.getChildProps(child));
                                        })}
                                     </View>);                    
                } 
                else if (this.isIconRight() && !this.isIconLeft()) {
                    var iconElement = [];
                    iconElement = _.remove(childrenArray, function(item) {
                                                if(item.type == Icon) {
                                                    return true;
                                                }  
                                            });
                    
                    newChildren.push(<View >
                                        {childrenArray.map((child) => {
                                          return React.cloneElement(child, this.getChildProps(child));
                                        })}
                                     </View>);                    
                    newChildren.push(React.cloneElement(iconElement[0], this.getChildProps(iconElement[0])));
                } 
                else if (this.isIconRight() && this.isIconLeft()) {
                    var iconElement = [];
                    iconElement = _.filter(childrenArray, function(item) {
                                                if(item.type == Icon) {
                                                    return true;
                                                }  
                                            });                  

                   
                    newChildren.push(<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                                        {childrenArray.slice(0,2).map((child) => {
                                          return React.cloneElement(child, this.getChildProps(child));
                                        })}
                                     </View>);                    
                    newChildren.push(React.cloneElement(iconElement[1], this.getChildProps(iconElement[1])));
                } 

                else if (this.thumbnailPresent()) {
                    
                    var iconElement = [];
                    iconElement = _.remove(childrenArray, function(item) {
                                                if(item.type == Thumbnail) {
                                                    return true;
                                                }  
                                            });   
                    newChildren.push(React.cloneElement(iconElement[0], this.getChildProps(iconElement[0])));
                    newChildren.push(<View style={{flexDirection: 'column', paddingLeft: 15, alignSelf: (this.squareThumbs()) ? 'flex-start' : 'center', flex: 1 }} >
                                        {childrenArray.map((child) => {
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