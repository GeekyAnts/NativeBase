/* @flow */
'use strict';

import React from 'react';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import Button from './Button';
import { Platform, Animated, Dimensions, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import View from './View';
import Icon from './Icon';
import Badge from './Badge';
import IconNB from './Icon';
import Text from './Text';
import _ from 'lodash';

const { height, width } = Dimensions.get('window');

const AnimatedFab = Animated.createAnimatedComponent(Button);

export default class Fab extends NativeBaseComponent {


    constructor(props) {
        super(props);
        propTypes: {
            style : React.PropTypes.object
        }
        this.state = {
            buttons : undefined,
            active: false
        }
    }

    fabTopValue(pos) {
        if(pos === 'topLeft') {
          return {
            top: 20,
            bottom: undefined,
            left: 20,
            right: undefined
          }
        }
        else if (pos === 'bottomRight') {
          return {
            top: undefined,
            bottom: 20,
            left: undefined,
            right: 20
          }
        }
        else if (pos === 'bottomLeft') {
          return {
            top: undefined,
            bottom: 20,
            left: 20,
            right: undefined
          }
        }
        else if (pos === 'topRight') {
          return {
            top: 20,
            bottom: undefined,
            left: undefined,
            right: 20
          }
        }
    }

    fabOtherBtns(direction,i) {
        if(direction === 'up') {
          return {
            top: undefined,
            bottom: (this.props.active === false) ? ((Platform.OS === 'ios') ? 50 : 8) : ((i*50)+ 65),
            left: 8,
            right: 0
          }
        }
        else if (direction === 'left') {
          return {
            top: 8,
            bottom: 0,
            left: (this.props.active === false) ? ((Platform.OS === 'ios') ? 50 : 8) : -((i*50)+ 50),
            right: 0
          }
        }
        else if (direction === 'down') {
          return {
            top: (this.props.active === false) ? ((Platform.OS === 'ios') ? 50 : 8) : ((i*50)+ 65),
            bottom: 0,
            left: 8,
            right: 0
          }
        }
        else if (direction === 'right') {
          return {
            top: 10,
            bottom: 0,
            left: (this.props.active === false) ? ((Platform.OS === 'ios') ? 50 : 8) : ((i*50)+ 65),
            right: 0
          }
        }
    }

    getInitialStyle() {
        return {
            fab: {
                height: 56,
                width: 56,
                borderRadius: 28,
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
                shadowRadius: 4,
                position: 'absolute',
                bottom: 0,
                backgroundColor: this.getTheme().btnPrimaryBg
            },
            container: {
              position: 'absolute',
              top: (this.props.position) ? this.fabTopValue(this.props.position).top : undefined,
              bottom: (this.props.position) ? this.fabTopValue(this.props.position).bottom : 20,
              right: (this.props.position) ? this.fabTopValue(this.props.position).right : 20,
              left: (this.props.position) ? this.fabTopValue(this.props.position).left : undefined,
              width: 56,
              height: this.containerHeight,
              flexDirection: (this.props.direction) ? ((this.props.direction=='left || right') ? 'row' : 'column') : 'column',
              alignItems: 'center'
            },
            iconStyle: {
                color: '#fff',
                fontSize: 24,
                lineHeight: (Platform.OS == 'ios') ? 27 : undefined
            },
            buttonStyle: {
                position: 'absolute',
                height: 40,
                width: 40,
                left: 7,
                borderRadius: 20,
                transform: [{scale: this.buttonScale}],
                marginBottom: 10,
                backgroundColor: this.getTheme().btnPrimaryBg
            }
        }
    }

    getContainerStyle() {

        return _.merge(this.getInitialStyle().container,this.props.containerStyle);

    }

    prepareFabProps() {

      var defaultProps = {
          style: this.getInitialStyle().fab
      };
      var incomingProps = _.clone(this.props);
      delete incomingProps.onPress;

      return computeProps(incomingProps, defaultProps);

    }

    getOtherButtonStyle(child,i) {

      var type = {
        top: (this.props.direction) ? (this.fabOtherBtns(this.props.direction,i).top) : ((Platform.OS === 'ios') ? (i*50)+5 : ((this.props.active === false) ? (155) : (i*50)+5)),
        left: (this.props.direction) ? (this.fabOtherBtns(this.props.direction,i).left) : 8,
        right: (this.props.direction) ? (this.fabOtherBtns(this.props.direction,i).right) : 0,
        bottom: (this.props.direction) ? (this.fabOtherBtns(this.props.direction,i).bottom) : undefined
      }

      return _.merge(this.getInitialStyle().buttonStyle,child.props.style,type);

    }
    prepareButtonProps(child) {
        var inp = _.clone(child.props);
        delete inp.style;


        var defaultProps = {};

        return computeProps(inp, defaultProps);
    }

    componentDidMount() {
      let childrenArray = React.Children.toArray(this.props.children);
      let icon = _.remove(childrenArray, (item) => {
          if(item.type == Button) {
              return true;
          }
      });
      this.setState({
        buttons: icon.length
      });
      setTimeout(()=> {
          this.setState({
              active: this.props.active
          });
      }, 0);
    }

    renderFab() {
      let childrenArray = React.Children.toArray(this.props.children);
      let icon = _.remove(childrenArray, (item) => {
        if(item.type == Button) {
          return true;
        }
      });
      // this.setState({
      //   buttons: icon.length
      // });
      return React.cloneElement(childrenArray[0], {style: this.getInitialStyle().iconStyle});

    }

    renderButtons() {
        let childrenArray = React.Children.toArray(this.props.children);
        let icon = _.remove(childrenArray, (item) => {
            if(item.type == Icon) {
                return true;
            }
        });

        let newChildren = [];

        {childrenArray.map((child, i) => {
              newChildren.push(<AnimatedFab style={this.getOtherButtonStyle(child,i)}
              {...this.prepareButtonProps(child,i)}
                    fabButton={true}
                    key={i}
                  >{child.props.children}
              </AnimatedFab>);
            }
        )}
        return newChildren;
    }
    upAnimate() {
      if (!this.props.active) {
        Animated.spring(this.containerHeight, {
            toValue: (this.state.buttons*51.3)+56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 1
        }).start();
      }
      else {
        Animated.spring(this.containerHeight, {
            toValue: 56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 0
        }).start();
      }
    }

    leftAnimate() {
      if (!this.state.active) {
        Animated.spring(this.containerWidth, {
            toValue: (this.state.buttons*51.3)+56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 1
        }).start();
      }
      else {
        this.setState({
            active: false
        });
        Animated.spring(this.containerHeight, {
            toValue: 56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 0
        }).start();
      }
    }

    rightAnimate() {
      if (!this.state.active) {
        Animated.spring(this.containerWidth, {
            toValue: (this.state.buttons*51.3)+56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 1
        }).start();
      }
      else {
        this.setState({
            active: false
        });
        Animated.spring(this.containerHeight, {
            toValue: 56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 0
        }).start();
      }
    }

    downAnimate() {
      if (!this.state.active) {
        Animated.spring(this.containerHeight, {
            toValue: (56)
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 1
        }).start();
      }
      else {
        this.setState({
            active: false
        });
        Animated.spring(this.containerHeight, {
            toValue: 56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 0
        }).start();
      }
    }

    _animate() {

      const { props: {direction,position} } = this;
      if(this.props.direction) {
        if(this.props.direction === 'up') {
          this.upAnimate();
        }
        else if (this.props.direction === 'left') {
          this.leftAnimate();
        }

        else if (this.props.direction === 'right') {
          this.rightAnimate();
        }
         else if(this.props.direction === 'down') {
          this.downAnimate();
        }
      }
      else {
        this.upAnimate();
      }
     }

    fabOnPress() {
      if(this.props.onPress) {
        this.props.onPress();
        this._animate();
      }
    }

    render() {
        const { props: {active} } = this;
        if(!this.props.active) {
          this.containerHeight = new Animated.Value(56);
          this.containerWidth = new Animated.Value(56);
          this.buttonScale = new Animated.Value(0);
        }
        else {
          this.containerHeight = this.containerHeight || new Animated.Value(0);
          this.containerWidth = this.containerWidth || new Animated.Value(0);
          this.buttonScale = this.buttonScale || new Animated.Value(0);
        }
        return(
            <Animated.View style={this.getContainerStyle()}>
              {this.renderButtons()}
              <TouchableOpacity  onPress={()=> this.fabOnPress()} {...this.prepareFabProps()}>
                  {this.renderFab()}
              </TouchableOpacity>
            </Animated.View>
        );
    }
}
