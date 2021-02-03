import React from 'react';
import { PanResponder, View, Platform } from 'react-native';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import { useThemeProps } from '../../../hooks';
import type { ISliderProps } from './types';
import { SliderContext } from './Context';

type StateType = {
  barSize: number | null;
  deltaValue: number;
  value: number;
};

class NBSlider extends React.PureComponent<
  ISliderProps & {
    thumbSize?: number;
    sliderSize?: number;
    activeColor?: string;
  },
  StateType
> {
  static contextType = SliderContext;
  state = {
    barSize: null,
    deltaValue: 0,
    value: this.props.defaultValue || 0,
  };

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_event, gestureState) =>
      !(this.props.isDisabled || this.props.isReadOnly) &&
      this.onMove(gestureState),
    onPanResponderRelease: () => this.onEndMove(),
    onPanResponderTerminate: () => {},
  });

  onMove(gestureState: any) {
    const { barSize } = this.state;
    const { min = 0, max = 100 } = this.props;
    const newDeltaValue = this.getValueFromStartOffset(
      this.props.orientation === 'vertical'
        ? -gestureState.dy
        : gestureState.dx,
      barSize,
      this.props.min || 0,
      this.props.max || 100
    );
    this.props.onChange &&
      this.props.onChange(
        this.capValueWithinRange(this.state.value + newDeltaValue, [min, max])
      );
    this.setState({
      deltaValue: newDeltaValue,
    });
  }
  onEndMove() {
    const { value, deltaValue } = this.state;
    const { min = 0, max = 100 } = this.props;
    const cappedVal = this.capValueWithinRange(value + deltaValue, [min, max]);
    this.props.onChangeEnd && this.props.onChangeEnd(cappedVal);
    this.setState({ value: cappedVal, deltaValue: 0 });
  }

  onBarLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    const barSize = this.props.orientation === 'vertical' ? height : width;
    this.setState({ barSize });
  };

  capValueWithinRange = (value: number, range: number[]) => {
    if (value < range[0]) return range[0];
    if (value > range[1]) return range[1];
    return value;
  };

  getValueFromStartOffset = (
    offset: number,
    barSize: number | null,
    rangeMin: number,
    rangeMax: number
  ) => {
    if (barSize === null) return 0;
    return ((rangeMax - rangeMin) * offset) / barSize;
  };

  getOffsetFromValue = (
    value: number,
    rangeMin: number,
    rangeMax: number,
    barSize: number | null
  ) => {
    if (barSize === null) return 0;
    const valueOffset = value - rangeMin;
    const totalRange = rangeMax - rangeMin;
    const percentage = valueOffset / totalRange;
    return barSize * percentage;
  };

  onAccessibilityAction = (event: any) => {
    const max = this.props.max ?? 100;
    const min = this.props.min ?? 0;

    const incrementStep = this.props.accessibilityIncrementSteps ?? max / 10;
    const decrementStep = this.props.accessibilityDecrementSteps ?? max / 10;

    switch (event.nativeEvent.actionName) {
      case 'increment':
        this.setState({
          value: Math.min(this.state.value + incrementStep, max),
        });
        break;
      case 'decrement':
        this.setState({
          value: Math.max(this.state.value - decrementStep, min),
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { value, deltaValue, barSize } = this.state;
    const min = this.props.min ?? 0;
    const max = this.props.max ?? 100;
    const cappedValue = this.capValueWithinRange(value + deltaValue, [
      min,
      max,
    ]);

    const sliderOffset = this.getOffsetFromValue(
      cappedValue,
      min,
      max,
      barSize
    );

    return (
      <View
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel={this.props.accessibilityLabel ?? 'Slider'}
        accessibilityValue={{
          min,
          max,
          now: value,
        }}
        accessibilityHint={this.props.accessibilityHint}
        accessibilityActions={[
          {
            name: 'increment',
            label: 'Increment',
          },
          {
            name: 'decrement',
            label: 'Decrement',
          },
        ]}
        onAccessibilityAction={this.onAccessibilityAction}
      >
        <SliderContext.Provider
          value={{
            sliderOffset,
            trackColor: this.props.trackColor,
            colorScheme: this.props.activeColor,
            barSize: this.state.barSize,
            panResponder: this.panResponder,
            isReversed: this.props.isReversed,
            thumbSize: this.props.thumbSize,
            sliderSize: this.props.sliderSize,
            orientation: this.props.orientation,
            isDisabled: this.props.isDisabled,
            value: this.state.value,
          }}
        >
          <Box
            position="relative"
            display="flex"
            my={3}
            justifyContent="center"
            alignItems="center"
            minHeight={3}
            minWidth="100%"
            {...this.props}
            onLayout={this.onBarLayout}
            opacity={this.props.isDisabled ? 0.4 : 1}
            {...(Platform.OS === 'web' && this.props.isDisabled
              ? {
                  disabled: this.props.isDisabled,
                  cursor: this.props.isDisabled ? 'not-allowed' : 'auto',
                }
              : {})}
          >
            {this.state.barSize && this.props.children}
          </Box>
        </SliderContext.Provider>
      </View>
    );
  }
}

const Slider = ({ ...props }: ISliderProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const newProps = useThemeProps('Slider', {
    ...formControlContext,
    ...props,
  });

  return <NBSlider {...newProps} />;
};

export default React.memo(Slider);
