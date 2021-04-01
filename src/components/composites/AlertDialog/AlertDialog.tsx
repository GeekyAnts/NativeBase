import React from 'react';
import { Modal, IModalProps } from '../Modal';
import type { IBoxProps } from '../../primitives/Box';
import type { IIconButtonProps } from '../IconButton';

export interface IAlertDialogProps
  extends Omit<IModalProps, 'initialFocusRef'> {
  leastDestructiveRef: IModalProps['initialFocusRef'];
}
export type IAlertDialogComponentType = ((
  props: IAlertDialogProps
) => JSX.Element) & {
  Body: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  CloseButton: React.MemoExoticComponent<
    (props: IIconButtonProps) => JSX.Element
  >;
  Content: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Footer: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Header: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
};

const AlertDialog = React.memo((props: IAlertDialogProps) => {
  const { leastDestructiveRef, ...rest } = props;
  return (
    <Modal
      {...rest}
      initialFocusRef={leastDestructiveRef}
      closeOnOverlayClick={false}
    />
  );
});

export default AlertDialog;
