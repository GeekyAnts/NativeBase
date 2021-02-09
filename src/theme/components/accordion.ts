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

// AccordionSummary
const accordionButtonBaseStyle = (props: Record<string, any>) => {
  return {
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopColor: mode('gray.800', 'gray.50')(props),
    p: 3,
    _hover: {
      bg: mode('default.200', 'default.300')(props),
    },
    _expanded: {
      bg: 'default.600',
      borderBottomColor: mode('gray.800', 'gray.50')(props),
      color: 'white',
    },
    _disabled: {
      bg: mode('gray.200', 'gray.700')(props),
    },
  };
};
export const AccordionSummary = {
  baseStyle: accordionButtonBaseStyle,
};

// AccordionDetails
const accordionPanelBaseStyle = {
  p: 3,
};

export const AccordionDetails = {
  baseStyle: accordionPanelBaseStyle,
};
