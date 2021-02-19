import SelectItem from './SelectItem';
import SelectMain from './Select';
import Picker from './Picker';
import type {
  ISelectProps,
  ISelectItemProps,
  ISelectComponentType,
} from './types';

// const SelectTemp: any = SelectMain;
const SelectTemp: any = SelectMain;
SelectTemp.Picker = Picker;
SelectTemp.Item = SelectItem;

const Select = SelectTemp as ISelectComponentType;

export default Select;
export type { ISelectProps, ISelectItemProps, ISelectComponentType };
