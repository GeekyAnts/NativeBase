import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Box from '../../primitives/Box';
import { useToken } from '../../../hooks';
import type {
  IAccordionButtonProps,
  IAccordionItemContextProps,
} from './types';
import { AccordionItemContext } from './Context';

const AccordionButton = (
  { children, style, _expanded, _disabled, ...props }: IAccordionButtonProps,
  ref: any
) => {
  const {
    isOpen,
    isDisabled,
    onOpen,
    onClose,
  }: IAccordionItemContextProps = React.useContext(AccordionItemContext);

  const pressHandler = () => {
    isOpen ? onClose && onClose() : onOpen && onOpen();
  };
  const borderColor = useToken('colors', 'muted.200');
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={pressHandler}
      accessible
      accessibilityRole="checkbox"
      ref={ref}
    >
      <Box
        p={3}
        borderColor={borderColor}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        {...props}
        style={[style, isOpen && _expanded, isDisabled && _disabled]}
        opacity={isDisabled ? 0.4 : 1}
        {...(Platform.OS === 'web'
          ? {
              disabled: isDisabled,
              cursor: isDisabled ? 'not-allowed' : 'auto',
            }
          : {})}
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export default React.memo(
  React.forwardRef<TouchableOpacity, IAccordionButtonProps>(AccordionButton)
);
