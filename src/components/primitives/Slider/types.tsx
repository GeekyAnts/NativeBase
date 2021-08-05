import type { IBoxProps } from '../Box';

export interface ISliderProps extends IBoxProps {
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

export interface ISliderTrackProps extends IBoxProps {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Props applied if isDisabled is true. */
  _disabled?: any;
  /** Props applied if isReadOnly is true. */
  _readOnly?: any;
}

export interface ISliderTrackFilledProps extends IBoxProps {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Props applied if isDisabled is true. */
  _disabled?: any;
  /** Props applied if isReadOnly is true. */
  _readOnly?: any;
}

export interface ISliderThumbProps extends IBoxProps {
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
  props: ISliderProps & { ref?: any }
) => JSX.Element) & {
  Thumb: React.MemoExoticComponent<
    (props: ISliderThumbProps & { ref?: any }) => JSX.Element
  >;
  Track: React.MemoExoticComponent<
    (props: ISliderTrackProps & { ref?: any }) => JSX.Element
  >;
  FilledTrack: React.MemoExoticComponent<
    (props: ISliderTrackFilledProps & { ref?: any }) => JSX.Element
  >;
};
