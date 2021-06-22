import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Box from '../../primitives/Box';
import type {
  IAccordionSummaryProps,
  IAccordionItemContextProps,
} from './types';
import { AccordionItemContext } from './Context';
import { useThemeProps } from '../../../hooks';
import { mergeRefs } from '../../../utils';
import { useHover } from '@react-native-aria/interactions';

const AccordionSummary = (
  { children, ...props }: IAccordionSummaryProps,
  ref: any
) => {
  const {
    index,
    isOpen,
    isDisabled,
    onOpen,
    onClose,
  }: IAccordionItemContextProps = React.useContext(AccordionItemContext);

  const { _hover, _expanded, _disabled, ...themedProps } = useThemeProps(
    'AccordionSummary',
    props
  );
  const pressHandler = () => {
    isOpen ? onClose && onClose() : onOpen && onOpen();
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      disabled={isDisabled}
      onPress={pressHandler}
      accessible
      accessibilityRole="checkbox"
      ref={mergeRefs([ref, _ref])}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        {...themedProps}
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
    </TouchableOpacity>
  );
};

export default React.memo(React.forwardRef(AccordionSummary));
