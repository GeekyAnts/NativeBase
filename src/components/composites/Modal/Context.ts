import React from 'react';

export const ModalContext = React.createContext({
  visible: false,
  toggleVisible: (_bool: boolean) => {},
  toggleOnClose: (_bool: boolean) => {},
  newProps: {
    _width: '60%',
    size: 'md',
    modalOverlayStyle: {},
    closeOnOverlayClick: true,
    modalCloseButtonStyle: {},
    modalCloseButtonProps: {},
    modalFooterProps: {},
    modalBodyProps: {},
    modalContentProps: {},
    modalHeaderProps: {},
    modalOverlayProps: {},
  },
});
