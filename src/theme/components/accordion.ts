import { mode } from '../tools';

// Accordion
const accordionBaseStyle = (props: Record<string, any>) => {
  return {
    borderWidth: 1,
    borderColor: mode('gray.800', 'gray.50')(props),
    borderRadius: 'lg',
  };
};
export const Accordion = {
  baseStyle: accordionBaseStyle,
};

// AccordionItem
export const AccordionItem = {};

// AccordionIcon
export const AccordionIcon = {};

// AccordionButton
const accordionButtonBaseStyle = (props: Record<string, any>) => {
  return {
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopColor: mode('gray.800', 'gray.50')(props),
    p: 3,
    _hover: {
      bg: mode('default.100', 'default.800')(props),
    },
    _expanded: {
      bg: mode('default.600', 'default.400')(props),
      borderBottomColor: mode('gray.800', 'gray.50')(props),
      color: 'white',
    },
    _disabled: {
      bg: mode('gray.200', 'gray.700')(props),
    },
  };
};
export const AccordionButton = {
  baseStyle: accordionButtonBaseStyle,
};

// AccordionPanel
const accordionPanelBaseStyle = {
  p: 3,
};

export const AccordionPanel = {
  baseStyle: accordionPanelBaseStyle,
};
