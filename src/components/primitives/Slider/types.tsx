import type { MutableRefObject } from 'react';
import type { CustomProps } from '../../../components/types';
import type { InterfaceBoxProps } from '../Box';

export interface InterfaceSliderProps extends InterfaceBoxProps<ISliderProps> {
  /** The current value of the Slider */
  value?: number;
  /** The default value (uncontrolled). */
  defaultValue?: number;
  /** Handler that is called when the value changes. */
  onChange?: (value: number) => void;
  /**
   * Color scheme of the slider
   */
  colorScheme?: string;
  /**
   * Text description of slider. This will be announced by screen reader/
   */
  accessibilityLabel?: string;
  /**
   * If true, the value will be incremented or decremented in reverse.
   */
  isReversed?: boolean;
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the whole Slider is disabled. */
  isDisabled?: boolean;
  /** Fired when the slider stops moving, due to being let go. */
  onChangeEnd?: (value: number) => void;
  /**
   * The slider's minimum value.
   * @default 0
   */
  minValue?: number;
  /**
   * The slider's maximum value.
   * @default 100
   */
  maxValue?: number;
  /**
   * The slider's step value.
   * @default 1
   */
  step?: number;
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Props applied if isDisabled is true. */
  _disabled?: any;
  /** Props applied if isReadOnly is true. */
  _readOnly?: any;
}

export interface ISliderTrackProps
  extends InterfaceBoxProps<ISliderTrackProps> {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Props applied if isDisabled is true. */
  _disabled?: any;
  /** Props applied if isReadOnly is true. */
  _readOnly?: any;
}

export interface ISliderTrackFilledProps
  extends InterfaceBoxProps<ISliderTrackFilledProps> {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Props applied if isDisabled is true. */
  _disabled?: any;
  /** Props applied if isReadOnly is true. */
  _readOnly?: any;
}

export interface ISliderThumbProps
  extends InterfaceBoxProps<ISliderThumbProps> {
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the Thumb is disabled. */
  isDisabled?: boolean;
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Props applied if isDisabled is true. */
  _disabled?: any;
  /** Props applied if isReadOnly is true. */
  _readOnly?: any;
}

export type ISliderComponentType = ((
  props: ISliderProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Thumb: React.MemoExoticComponent<
    (props: ISliderThumbProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Track: React.MemoExoticComponent<
    (props: ISliderTrackProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  FilledTrack: React.MemoExoticComponent<
    (
      props: ISliderTrackFilledProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};

export type ISliderProps = InterfaceSliderProps & CustomProps<'Slider'>;
