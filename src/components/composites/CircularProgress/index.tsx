import { default as CircularProgressMain } from './CircularProgress';
import type { ICircularProgressComponentType } from './types';
import Text from './../../primitives/Text';

const CircularProgressTemp: any = CircularProgressMain;
CircularProgressTemp.Label = Text;

const CircularProgress = CircularProgressTemp as ICircularProgressComponentType;
export default CircularProgress;
