import React from 'react';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import { usePropsConfig } from '../../../hooks';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import { default as Box, IBoxProps } from '../../primitives/Box';
import View from '../../primitives/View';
import CloseButton from '../CloseButton';
import type { IPopoverProps } from './props';
import { usePopover } from '../../../core';
import { Button } from 'native-base';

const PopoverContext = React.createContext({
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
  trigger,
  closeOnSelect = true,
  children,
  onOpen,
  onClose,
  ...props
}: IPopoverProps) => {
  let triggerRef = React.useRef();
  const newProps = usePropsConfig('Menu', props);
  let [isOpen, toggle] = React.useState<boolean>(false);
  const { setPopover, closePopover } = usePopover();

  const closeMenu = () => {
    closePopover();
    toggle(false);
    onClose && onClose();
  };
  const openMenu = () => {
    setPopover(<View {...newProps}>{children}</View>, {
      triggerRef,
      animationDuration: 200,
      onClose: closeMenu,
      parentComponentConfig: { open: isOpen, closeMenu, closeOnSelect },
    });
    toggle(true);
    onOpen && onOpen();
  };

  return (
    <View flex={1} ref={triggerRef}>
      {trigger(
        {
          onPress: openMenu,
        },
        { open: isOpen }
      )}
    </View>
  );
};

// const Popover = ({
//   children,
//   initialFocusRef,
//   finalFocusRef,
//   onOpen,
//   onClose,
//   closeOnBlur,
//   id,
//   backgroundColor,
//   bg,
//   borderWidth,
//   borderColor,
//   ...props
// }: IPopoverProps) => {
//   // const popoverClose = () => {
//   //   closePopover();
//   //   toggle(false);
//   //   onClose && onClose();
//   // };
//   // const popoverOpen = () => {
//   //   setPopover(<View {...newProps}>{children}</View>, {
//   //     triggerRef: popOverRef,
//   //     animationDuration: 200,
//   //     onClose: popoverClose,
//   //     parentComponentConfig: { open: isOpen, popoverClose, closeOnSelect },
//   //   });
//   //   toggle(true);
//   //   onOpen && onOpen();
//   // };

//   const [trigger, setTrigger] = React.useState();
//   const [isVisible, setIsVisible] = React.useState(false);
//   const popOverRef: any = React.useRef(null);
//   const newProps = usePropsConfig('Popover', props);
//   const value: any = {
//     PopoverTrigger: trigger,
//     setPopoverTrigger: setTrigger,
//     PopoverRef: popOverRef,
//     initialFocusRef: initialFocusRef,
//     finalFocusRef: finalFocusRef,
//     isVisible: isVisible,
//     setIsVisible: setIsVisible,
//     newProps: newProps,
//     closeOnBlur: closeOnBlur,
//     backgroundColor:
//       bg || backgroundColor || { ...newProps.popoverProps }.backgroundColor,
//     borderColor: borderColor || { ...newProps.popoverProps }.borderColor,
//     borderWidth: borderWidth || { ...newProps.popoverProps }.borderWidth,
//   };

//   return (
//     <PopoverContext.Provider value={value}>
//       <View nativeID={id} flex={1}>{children}</View>
//     </PopoverContext.Provider>
//   );
// };

export const PopoverTrigger = ({ children }: any) => {
  const { setPopoverTrigger } = React.useContext(PopoverContext);
  React.useEffect(() => {
    setPopoverTrigger(
      React.Children.map(children, (child) => {
        return React.cloneElement(
          child,
          { isDisabled: true, disabled: true },
          child.props.children
        );
      })
    );
  }, [setPopoverTrigger, children]);

  return null;
};

export const PopoverHeader = (props: IBoxProps) => {
  const {
    newProps: { popoverHeaderProps },
  } = React.useContext(PopoverContext);
  return <Box {...popoverHeaderProps} {...props} />;
};

export const PopoverContent = ({
  children,
  ...props
}: IPopoverProps & { ref?: any }) => {
  const {
    // PopoverRef,
    // PopoverTrigger,
    // onOpen,
    // initialFocusRef,
    // onClose,
    // finalFocusRef,
    // closeOnBlur,
    newProps: { popoverContentProps },
  }: // backgroundColor,
  // borderColor,
  // borderWidth,
  any = React.useContext(PopoverContext);

  let [isOpen, toggle] = React.useState<boolean>(false);
  const { setPopover, closePopover } = usePopover();
  let triggerRef = React.useRef();

  const closeMenu = () => {
    closePopover();
    toggle(false);
    // onClose && onClose();
  };
  const openMenu = () => {
    setPopover(
      <Box {...popoverContentProps} {...props}>
        {children}
      </Box>,
      {
        triggerRef,
        animationDuration: 200,
        onClose: closeMenu,
        parentComponentConfig: {
          open: isOpen,
          closeMenu,
        },
      }
    );
    toggle(true);
    // onOpen && onOpen();
  };
  // const PopoverTriggerElem = React.cloneElement(
  //   PopoverTrigger ? PopoverTrigger : <Box />,
  //   { onPress: openMenu },
  //   null
  // );
  return (
    <View ref={triggerRef} flex={1}>
      <Button onPress={openMenu}>{'PopoverTrigger'}</Button>
    </View>
  );
};

export const PopoverBody = (props: any) => {
  const {
    newProps: { popoverBodyProps },
    borderColor,
    borderWidth,
  } = React.useContext(PopoverContext);
  return (
    <Box
      {...popoverBodyProps}
      borderTopColor={borderColor}
      borderTopWidth={borderWidth}
      {...props}
    />
  );
};

export const PopoverFooter = (props: any) => {
  const {
    newProps: { popoverFooterProps },
    borderColor,
    borderWidth,
  } = React.useContext(PopoverContext);
  return (
    <Box
      {...popoverFooterProps}
      borderTopColor={borderColor}
      borderTopWidth={borderWidth}
      {...props}
    />
  );
};

export const PopoverCloseButton = (props: any) => {
  const {
    PopoverRef,
    newProps: { popoverCloseButtonProps },
  }: any = React.useContext(PopoverContext);

  return (
    <View position="absolute" right={0} top={0} zIndex={1}>
      <CloseButton
        {...popoverCloseButtonProps}
        {...props}
        onPress={() => PopoverRef?.current.toggleTooltip()}
      />
    </View>
  );
};

export default Popover;
export type { IPopoverProps };
