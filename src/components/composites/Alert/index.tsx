import AlertIcon from './AlertIcon';
import AlertMain from './Alert';

export type { IAlertProps, IAlertContext } from './types';
import type { IAlertComponentType } from './types';

const AlertTemp: any = AlertMain;
AlertTemp.Icon = AlertIcon;
// To add typings
const Alert = AlertTemp as IAlertComponentType;
export { Alert };
