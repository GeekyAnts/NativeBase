/* @flow */
'use strict';

import React from 'react';
import clamp from 'clamp';
import {Animated, PanResponder, Platform} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import View from './View';

var SWIPE_THRESHOLD = 130;

export default class CardSwiper extends NativeBaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            selectedItem : this.props.dataSource[0],
            selectedItem2 : this.props.dataSource[1],
            elevation1 : 3,
            elevation2: 2
        }
    }


    goToPrevious() {
        let currentPersonIdx = this.props.dataSource.indexOf(this.state.selectedItem);
        let newIdx = currentPersonIdx - 1;
        let newIdx2 = currentPersonIdx - 2;
        let that = this;
        setTimeout(function () {
            that.setState({
                selectedItem: that.props.dataSource[newIdx < 0 ? that.props.dataSource.length - 1 : newIdx],
                selectedItem2: that.props.dataSource[newIdx2 < 0 ? that.props.dataSource.length - 2 : newIdx2]
            });
        }, 100);
    }

    goToNext() {
        let currentPersonIdx = this.props.dataSource.indexOf(this.state.selectedItem);
        let newIdx = currentPersonIdx + 1;
        let newIdx2 = currentPersonIdx + 2;
        let that = this;
        setTimeout(function () {
            that.setState({
                selectedItem: that.props.dataSource[newIdx > that.props.dataSource.length - 1 ? 0 : newIdx],
                selectedItem2: that.props.dataSource[newIdx2 > that.props.dataSource.length - 2 ? 0 : newIdx2]
            });
        }, 100);
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (e, gestureState) => {
                console.log('moving');
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
            },

            onPanResponderMove: Animated.event([
                null, {dx: this.state.pan.x, dy: this.state.pan.y},
            ]),

            onPanResponderRelease: (e, {vx, vy}) => {
                console.log('stopeed');
                // this.state.pan.flattenOffset();
                var velocity;

                if (vx >= 0) {
                    velocity = clamp(vx, 5, 7);
                    console.log(velocity);
                } else if (vx < 0) {
                    velocity = clamp(vx * -1, 5, 7) * -1;
                    console.log(velocity);
                }

                if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
                    console.log('success');

                    if (velocity>0) {
                        // this.props.onSwipeRight();
                        this.goToNext();
                    } else {
                        // this.props.onSwipeLeft();
                        this.goToPrevious();
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
    }

    render() {

        let { pan } = this.state;

        let [translateX, translateY] = [pan.x, pan.y];

        let rotate = pan.x.interpolate({inputRange: [-300, 0, 300], outputRange: ['-15deg', '0deg', '15deg']});
        let opacity = pan.x.interpolate({inputRange: [-320, 0, 320], outputRange: [0.9, 1, 0.9]})
        // let scale = enter;

        let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}], opacity};

        return(
            <View style={this.props.style}>{(this.state.selectedItem)===undefined ? (<View />) :
                (<View>
                    <Animated.View style={{elevation: this.state.elevation2}}>
                        {this.props.renderItem(this.state.selectedItem2)}
                    </Animated.View>
                    <Animated.View style={[ animatedCardStyles, {marginTop: (Platform.OS=='android') ? -410 : -413, elevation: this.state.elevation1}] } {...this._panResponder.panHandlers} >
                        {this.props.renderItem(this.state.selectedItem)}
                    </Animated.View>
                    </View>
                )
            }
            </View>
        );
    }

}
