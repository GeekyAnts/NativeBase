import type {
  FocusableProps,
  LabelableProps,
  Orientation,
  RangeInputBase,
  Validation,
  ValueBase,
} from '@react-types/shared';
import type { IBoxProps } from '../Box';

export interface ISliderProps<T = number[]>
  extends RangeInputBase<number>,
    ValueBase<T>,
    LabelableProps,
    IBoxProps {
  colorScheme?: string;

  accessibilityLabel?: string;

  isReversed?: boolean;

  children?: any;
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: Orientation;
  /** Whether the whole Slider is disabled. */
  isDisabled?: boolean;
  /** Fired when the slider stops moving, due to being let go. */
  onChangeEnd?: (value: T) => void;
  // These are duplicated from ValueBase to define defaults for the docs.
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
}

export interface SliderThumbProps
  extends FocusableProps,
    Validation,
    LabelableProps {
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: Orientation;
  /** Whether the Thumb is disabled. */
  isDisabled?: boolean;
  /** Index of the thumb for accessing purposes. */
  index: number;
}

export interface AriaSliderThumbProps extends SliderThumbProps {}

export type ISliderComponentType = ((
  props: ISliderProps<number> & { ref?: any }
) => JSX.Element) & {
  Thumb: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Track: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  FilledTrack: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};
