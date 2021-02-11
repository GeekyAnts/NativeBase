import AlertDescription from './AlertDescription';
import AlertIcon from './AlertIcon';
import AlertTitle from './AlertTitle';
import AlertMain from './Alert';

export type { IAlertProps, IAlertContext } from './types';
import type { IAlertComponentType } from './types';

let AlertTemp: any = AlertMain;
AlertTemp.Description = AlertDescription;
AlertTemp.Icon = AlertIcon;
AlertTemp.Title = AlertTitle;
// To add typings
const Alert = AlertTemp as IAlertComponentType;
export { Alert };
