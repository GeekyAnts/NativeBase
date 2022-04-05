import type { ReactNode } from 'react';
import type { ITextProps } from '../../primitives/Text';
import type { InterfaceBoxProps } from '../../primitives/Box';
import type { CustomProps } from '../../../components/types';

export interface InterfaceToastProps extends InterfaceBoxProps<IToastProps> {
  /**
   * The title to be rendered in the Toast
   */
  title?: ReactNode;
  /**
   * The description of the toast
   */
  description?: ReactNode;
  /**
   * The delay before the toast hides (in milliseconds). If set to `null`, toast will never dismiss.
   * @default 5000
   */
  duration?: number | null;
  /**
   * The `id` of the toast. Mostly used when you need to prevent duplicate. By default, we generate a unique `id` for each toast
   */
  id?: any;
  /**
   * Callback function to run side effects after the toast has closed.
   */
  onCloseComplete?: () => void;
  /**
   * The placement of the toast. Defaults to bottom
   * @default bottom
   */
  placement?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';
  /**
   * Render a component toast component. Any component passed will receive 2 props: `id` and `onClose`.
   */
  render?: (props: any) => ReactNode;
  /**
   * For providing props to Title inside Toast
   */
  _title?: Partial<ITextProps>;
  /**
   * For providing props to Description inside Toast
   */
  _description?: Partial<ITextProps>;
  /**
   * The text to be announced by a screen reader when the Toast opens.
   */
  accessibilityAnnouncement?: string;
  /**
   * Determines the [accessibility announcement tone](https://reactnative.dev/docs/accessibility#accessibilityliveregion-android).
   */
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive';
}

export type IToast = {
  id: number;
  component: any;
  config?: IToastProps;
};

export type IToastInfo = {
  [key in any]: Array<IToast>;
};

export type IToastContext = {
  toastInfo: IToastInfo;
  setToastInfo: any;
  setToast: (props: IToastProps) => any;
  removeToast: (id: any) => void;
  hideAll: () => void;
  isActive: (id: any) => boolean;
  visibleToasts: any;
  setVisibleToasts: any;
  hideToast: (id: any) => void;
};

export type IToastProps = InterfaceToastProps & CustomProps<'Toast'>;
