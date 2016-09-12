/* @flow */
'use strict';

import React from 'react';
import clamp from 'clamp';
import {Animated, PanResponder} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import View from './View';


var SWIPE_THRESHOLD = 120;

export default class CardSwiper extends NativeBaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            enter: new Animated.Value(0.5)
        }
    }

    componentDidMount() {
        this._animateEntrance();
    }

    _animateEntrance() {
        Animated.spring(
            this.state.enter,
            { toValue: 1, friction: 8 }
        ).start();
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
            },

            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x, dy: this.state.pan.y},
            ]),

            onPanResponderRelease: (e, {vx, vy}) => {
                this.state.pan.flattenOffset();
                var velocity;

                if (vx >= 0) {
                    velocity = clamp(vx, 3, 5);
                } else if (vx < 0) {
                    velocity = clamp(vx * -1, 3, 5) * -1;
                }

                if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
                    if (velocity>0) {
                        this.props.onSwipeRight();
                    } else {
                        this.props.onSwipeLeft();
                    }
                    Animated.decay(this.state.pan, {
                        velocity: {x: velocity, y: vy},
                        deceleration: 0.98
                    }).start(this._resetState.bind(this))
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: {x: 0, y: 0},
                        friction: 4
                    }).start()
                }
            }
        })
    }

    _resetState() {
        this.state.pan.setValue({x: 0, y: 0});
        this.state.enter.setValue(0);
        this._animateEntrance();
    }

    render() {

        let { pan, enter, } = this.state;

        let [translateX, translateY] = [pan.x, pan.y];

        let rotate = pan.x.interpolate({inputRange: [-300, 0, 300], outputRange: ['-30deg', '0deg', '30deg']});
        let opacity = pan.x.interpolate({inputRange: [-150, 0, 150], outputRange: [0.5, 1, 0.5]})
        let scale = enter;

        let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};        

        

        return(
            <View>
                <Animated.View style={ animatedCardStyles } {...this._panResponder.panHandlers} >
                {this.props.children}
                </Animated.View>
            </View>
        );
    }

}
