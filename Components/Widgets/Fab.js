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

    propTypes: {
        style : React.PropTypes.object
    }

    state = {
        buttons : undefined
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
              bottom: 20,
              right: 20,
              width: 56,
              height: this.containerHeight,
              flexDirection: 'column',
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

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().fab
        };

        return computeProps(this.props, defaultProps);

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
              newChildren.push(<AnimatedFab
                    style={[this.getInitialStyle().buttonStyle, {top: i*50}]}
                    fabButton={true}
                    key={i}
                  >{child.props.children}
              </AnimatedFab>);
            }
        )}
        return newChildren;
    }
    _animate() {
        Animated.spring(this.containerHeight, {
            toValue: (this.state.buttons*51.3)+56
        }).start();
        Animated.spring(this.buttonScale, {
            toValue: 1
        }).start();
     }

    render() {
        this.containerHeight = new Animated.Value(56);
        this.buttonScale = new Animated.Value(0);
        return(
            <Animated.View style={this.getInitialStyle().container}>
              {this.renderButtons()}
              <TouchableOpacity  onPress={()=> {this.props.onPress ? this.props.onPress() : undefined, this._animate()}} style={this.getInitialStyle().fab}>
                  {this.renderFab()}
              </TouchableOpacity>
            </Animated.View>
        );
    }
}
