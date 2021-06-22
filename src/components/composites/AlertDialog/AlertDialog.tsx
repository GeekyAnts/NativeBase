import React from 'react';
import { Modal, IModalProps } from '../Modal';
import type { IBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../IconButton';

export interface IAlertDialogProps
  extends Omit<IModalProps, 'initialFocusRef'> {
  leastDestructiveRef: IModalProps['initialFocusRef'];
}
export type IAlertDialogComponentType = ((
  props: IAlertDialogProps & { ref?: any }
) => JSX.Element) & {
  Body: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  CloseButton: React.MemoExoticComponent<
    (props: IIconButtonProps & { ref?: any }) => JSX.Element
  >;
  Content: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};

const AlertDialog = React.memo(
  React.forwardRef((props: IAlertDialogProps, ref?: any) => {
    const { leastDestructiveRef, ...rest } = props;
    return (
      <Modal
        {...rest}
        initialFocusRef={leastDestructiveRef}
        closeOnOverlayClick={false}
        ref={ref}
      />
    );
  })
);

export default AlertDialog;
