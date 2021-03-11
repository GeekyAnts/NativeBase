import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Box from '../../primitives/Box';
import type {
  IAccordionSummaryProps,
  IAccordionItemContextProps,
  IAccordionContextProps,
} from './types';
import { AccordionContext, AccordionItemContext } from './Context';
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
  const {
    AccordionProps,
    TotalChildren,
  }: IAccordionContextProps = React.useContext(AccordionContext);

  const { _hover, _expanded, _disabled, ...newProps } = useThemeProps(
    'AccordionSummary',
    props
  );
  const pressHandler = () => {
    isOpen ? onClose && onClose() : onOpen && onOpen();
  };

  // Find the first and last Item and add borderRadius matching to the accordion over all borderRadius
  const firstItem = index === 0 ? true : false;
  const lastItem = TotalChildren
    ? index === TotalChildren - 1
      ? true
      : false
    : false;
  const edgeItemsProps = {
    borderTopLeftRadius: firstItem ? AccordionProps.borderRadius : 0,
    borderTopRightRadius: firstItem ? AccordionProps.borderRadius : 0,
    borderBottomLeftRadius: lastItem
      ? !isOpen
        ? AccordionProps.borderRadius
        : 0
      : 0,
    borderBottomRightRadius: lastItem
      ? !isOpen
        ? AccordionProps.borderRadius
        : 0
      : 0,
  };
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  return (
    <TouchableOpacity
      activeOpacity={1}
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
        {...edgeItemsProps}
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
    </TouchableOpacity>
  );
};

export default React.memo(React.forwardRef(AccordionSummary));
