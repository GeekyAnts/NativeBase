import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Box from '../../primitives/Box';
import type {
  IAccordionButtonProps,
  IAccordionItemContextProps,
} from './types';
import { AccordionItemContext } from './Context';
import { useThemeProps } from '../../../hooks';
import { Hoverable } from './../../../utils';

const AccordionButton = (
  { children, ...props }: IAccordionButtonProps,
  ref: any
) => {
  const {
    index,
    isOpen,
    isDisabled,
    onOpen,
    onClose,
  }: IAccordionItemContextProps = React.useContext(AccordionItemContext);

  const { _hover, _expanded, _disabled, ...newProps } = useThemeProps(
    'AccordionButton',
    props
  );
  const pressHandler = () => {
    isOpen ? onClose && onClose() : onOpen && onOpen();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={pressHandler}
      accessible
      accessibilityRole="checkbox"
      ref={ref}
    >
      <Hoverable>
        {(isHovered: boolean) => {
          return (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              {...newProps}
              {...(isHovered && _hover)}
              {...(isOpen && _expanded)}
              {...(isDisabled && _disabled)}
              {...(!index && { borderTopColor: 'transparent' })}
              {...(Platform.OS === 'web'
                ? {
                    disabled: isDisabled,
                    cursor: isDisabled ? 'not-allowed' : 'auto',
                  }
                : {})}
            >
              {children}
            </Box>
          );
        }}
      </Hoverable>
    </TouchableOpacity>
  );
};

export default React.memo(
  React.forwardRef<TouchableOpacity, IAccordionButtonProps>(AccordionButton)
);
