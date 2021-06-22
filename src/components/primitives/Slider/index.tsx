import SliderMain from './Slider';
import SliderThumb from './SliderThumb';
import SliderTrack from './SliderTrack';
import SliderFilledTrack from './SliderFilledTrack';
import type { ISliderComponentType } from './types';

let SliderTemp: any = SliderMain;
SliderTemp.Thumb = SliderThumb;
SliderTemp.Track = SliderTrack;
SliderTemp.FilledTrack = SliderFilledTrack;

// To add typings
const Slider = SliderTemp as ISliderComponentType;

export { Slider };
export { SliderContext } from './Context';

export type { ISliderProps } from './types';
