import React from 'react';
import { useThemeProps } from '../../../hooks';
import View from '../../primitives/View';
import type { IPopoverProps } from './types';

export const PopoverContext = React.createContext({
  PopoverTrigger: null,
  setPopoverTrigger: (_child: JSX.Element[] | JSX.Element) => {},
  PopoverRef: null,
  backgroundColor: '',
  borderColor: '',
  borderWidth: null,
  initialFocusRef: null,
  finalFocusRef: null,
  isVisible: false,
  setIsVisible: (_bool: boolean) => {},
  onOpen: () => {},
  onClose: () => {},
  closeOnBlur: true,
  newProps: {
    popoverCloseButtonProps: {},
    popoverFooterProps: {},
    popoverBodyProps: {},
    popoverContentProps: {},
    popoverHeaderProps: {},
  },
});

const Popover = ({
  children,
  initialFocusRef,
  finalFocusRef,
  onOpen,
  onClose,
  closeOnBlur,
  id,
  backgroundColor,
  bg,
  borderWidth,
  borderColor,
  ...props
}: IPopoverProps) => {
  const [trigger, setTrigger] = React.useState();
  const [isVisible, setIsVisible] = React.useState(false);
  const popOverRef: any = React.useRef(null);
  const newProps = useThemeProps('Popover', props);
  const value: any = {
    PopoverTrigger: trigger,
    setPopoverTrigger: setTrigger,
    PopoverRef: popOverRef,
    initialFocusRef: initialFocusRef,
    finalFocusRef: finalFocusRef,
    isVisible: isVisible,
    setIsVisible: setIsVisible,
    onOpen: onOpen,
    onClose: onClose,
    newProps: newProps,
    closeOnBlur: closeOnBlur,
    backgroundColor:
      bg || backgroundColor || { ...newProps.popoverProps }.backgroundColor,
    borderColor: borderColor || { ...newProps.popoverProps }.borderColor,
    borderWidth: borderWidth || { ...newProps.popoverProps }.borderWidth,
  };

  return (
    <PopoverContext.Provider value={value}>
      <View nativeID={id}>{children}</View>
    </PopoverContext.Provider>
  );
};

export default React.memo(Popover);
export type { IPopoverProps };
