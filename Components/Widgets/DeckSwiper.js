/* @flow */
'use strict';

import React from 'react';
import clamp from 'clamp';
import {Animated, PanResponder, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import View from './View';

var SWIPE_THRESHOLD = 120;

export default class CardSwiper extends NativeBaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            pan2: new Animated.ValueXY(),
            enter: new Animated.Value(0.8),
            selectedItem : this.props.dataSource[0],
            selectedItem2 : this.props.dataSource[1],
            card1Top: true,
            card2Top: false,
            fadeAnim: new Animated.Value(0.8)
        }
    }

    getInitialStyle() {
        return {
            topCard: {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0
            }
        }
    }


    findNextIndexes() {
        let currentIndex = this.props.dataSource.indexOf(this.state.selectedItem);
        let newIdx = currentIndex + 1;
        let newIdx2 = currentIndex + 2;
        console.log(currentIndex, newIdx, newIdx2);

        if(newIdx2 > this.props.dataSource.length - 1 && newIdx === this.props.dataSource.length - 1) {
            console.log("return", newIdx, 0);
            return [newIdx, 0];
        } else if (newIdx > this.props.dataSource.length - 1) {
            console.log("return", 0, 1);
            return [0, 1];
        } else {
            console.log("return", newIdx, newIdx2);
            return [newIdx, newIdx2];
        }
    }

    selectNext() {
        let nextIndexes = this.findNextIndexes();
        setTimeout( () => {
            this.setState({
                selectedItem: this.props.dataSource[nextIndexes[0]]
            });
            setTimeout( () => {
                this.setState({
                    selectedItem2: this.props.dataSource[nextIndexes[1]]
                });
                console.log(this.state);
            }, 350);
        }, 50);

    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
            },

            onPanResponderMove: (e, gestureState) => {
                let val = Math.abs((gestureState.dx*.0013));
                let opa = Math.abs((gestureState.dx*.0022));
                if (val>0.2) {
                    val = 0.2;
                }
                Animated.timing(
                    this.state.fadeAnim,
                    {toValue: 0.8+val}
                ).start();
                Animated.spring(
                    this.state.enter,
                    { toValue: 0.8+val, friction: 7 }
                ).start();
                Animated.event([
                    null, {dx: this.state.pan.x},
                ])(e, gestureState)
            },

            onPanResponderRelease: (e, {vx, vy}) => {
                var velocity;

                if (vx >= 0) {
                    velocity = clamp(vx, 4.5, 10);
                    console.log('velocity', velocity);
                } else if (vx < 0) {
                    velocity = clamp(vx * -1, 4.5, 10) * -1;
                    console.log('velocity', velocity);
                }

                if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {

                    if (velocity>0) {
                        (this.props.onSwipeRight) ? this.props.onSwipeRight() : undefined;
                        this.selectNext();
                    } else {
                        (this.props.onSwipeLeft) ? this.props.onSwipeLeft() : undefined;
                        this.selectNext();
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
        this.state.enter.setValue(0.8);
        this.state.fadeAnim.setValue(0.8);
        this.setState({
            card1Top: !this.state.card1Top,
            card2Top: !this.state.card2Top
        });

    }

    getCardStyles() {

        let { pan, pan2, enter } = this.state;

        let [translateX, translateY] = [pan.x, pan.y];
        // let [translateX, translateY] = [pan2.x, pan2.y];

        let rotate = pan.x.interpolate({inputRange: [-700, 0, 700], outputRange: ['-10deg', '0deg', '10deg']});

        let opacity = pan.x.interpolate({inputRange: [-320, 0, 320], outputRange: [0.9, 1, 0.9]})
        let scale = enter;

        let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}], opacity};
        let animatedCardStyles2 = {transform: [{scale}]};

        return [animatedCardStyles, animatedCardStyles2]
    }

    render() {


        return(
            <View style={{position: 'relative', flexDirection: 'column'}}>{(this.state.selectedItem)===undefined ? (<View />) :
                (<View>
                    <Animated.View style={[this.getCardStyles()[1],{opacity: this.state.fadeAnim}]} {...this._panResponder.panHandlers}>
                        {this.props.renderItem(this.state.selectedItem2)}
                    </Animated.View>
                    <Animated.View style={[ this.getCardStyles()[0], this.getInitialStyle().topCard] } {...this._panResponder.panHandlers} >
                        {this.props.renderItem(this.state.selectedItem)}
                    </Animated.View>
                    </View>
                )
            }
            </View>
        );
    }

}
