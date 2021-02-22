import SelectItem from './SelectItem';
import SelectMain from './Select';
import type {
  ISelectProps,
  ISelectItemProps,
  ISelectComponentType,
} from './types';

// const SelectTemp: any = SelectMain;
const SelectTemp: any = SelectMain;
SelectTemp.Item = SelectItem;

const Select = SelectTemp as ISelectComponentType;

export default Select;
export type { ISelectProps, ISelectItemProps, ISelectComponentType };
