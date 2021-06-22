import AccordionMain from './Accordion';

import { default as AccordionItem } from './AccordionItem';
import { default as AccordionSummary } from './AccordionSummary';
import { default as AccordionDetails } from './AccordionDetails';
import { default as AccordionIcon } from './AccordionIcon';
import type { IAccordionComponentType } from './types';

const AccordionTemp: any = AccordionMain;
AccordionTemp.Item = AccordionItem;
AccordionTemp.Summary = AccordionSummary;
AccordionTemp.Details = AccordionDetails;
AccordionTemp.Icon = AccordionIcon;

// To add typings
const Accordion = AccordionTemp as IAccordionComponentType;

export { Accordion };
export { AccordionContext } from './Context';
export { AccordionItemContext } from './Context';
export type {
  IAccordionProps,
  IAccordionItemProps,
  IAccordionSummaryProps,
  IAccordionDetailsProps,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
} from './types';
