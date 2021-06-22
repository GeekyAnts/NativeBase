import { mode } from '../tools/colors';

// Accordion
const accordionBaseStyle = (props: Record<string, any>) => {
  return {
    borderWidth: 1,
    borderColor: mode('gray.300', 'gray.600')(props),
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
const accordionSummaryBaseStyle = (props: Record<string, any>) => {
  return {
    borderTopWidth: 1,
    borderTopColor: mode('gray.300', 'gray.600')(props),
    p: 3,
    _hover: {
      bg: mode('primary.200', 'primary.300')(props),
    },
    _expanded: {
      bg: 'primary.600',
      borderBottomColor: mode('gray.300', 'gray.600')(props),
      _text: { color: 'white' },
    },
    _disabled: {
      bg: mode('gray.200', 'gray.700')(props),
    },
  };
};
export const AccordionSummary = {
  baseStyle: accordionSummaryBaseStyle,
};

// AccordionDetails
const accordionPanelBaseStyle = {
  p: 3,
};

export const AccordionDetails = {
  baseStyle: accordionPanelBaseStyle,
};
