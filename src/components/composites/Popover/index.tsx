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
import Tooltip from './Tooltip';

const StyledPopover = styled(Tooltip)<IPopoverProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

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
  const newProps = usePropsConfig('Popover', props);
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
    PopoverRef,
    PopoverTrigger,
    onOpen,
    initialFocusRef,
    onClose,
    finalFocusRef,
    closeOnBlur,
    newProps,
    backgroundColor,
    borderColor,
    borderWidth,
  }: any = React.useContext(PopoverContext);
  return (
    <StyledPopover
      {...newProps.popoverContentProps}
      width={newProps._width || newProps.size || '45%'}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      ref={PopoverRef}
      onOpen={() => {
        onOpen && onOpen();
        initialFocusRef?.current.focus();
      }}
      onClose={() => {
        onClose && onClose();
        finalFocusRef?.current.focus();
      }}
      closeOnBlur={closeOnBlur ?? true}
      popover={
        <Box width="100%">
          <Box>{children}</Box>
        </Box>
      }
      {...props}
    >
      {PopoverTrigger}
    </StyledPopover>
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
