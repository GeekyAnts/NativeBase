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
}

export interface ISliderThumbProps extends IBoxProps {
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the Thumb is disabled. */
  isDisabled?: boolean;
}

export type ISliderComponentType = ((
  props: ISliderProps & { ref?: any }
) => JSX.Element) & {
  Thumb: React.MemoExoticComponent<
    (props: ISliderThumbProps & { ref?: any }) => JSX.Element
  >;
  Track: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  FilledTrack: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};
