import React from 'react';
import remove from 'lodash/remove';
import Box from '../../primitives/Box';
import type { IAccordionProps } from './types';
import { useThemeProps } from '../../../hooks';
import getIndexedChildren from '../../../utils/getIndexedChildren';

import { default as AccordionItem } from './AccordionItem';
import { default as AccordionSummary } from './AccordionSummary';
import { default as AccordionDetails } from './AccordionDetails';
import { default as AccordionIcon } from './AccordionIcon';

import { AccordionContext } from './Context';

const Accordion = ({
  children,
  allowMultiple,
  allowToggle,
  onChange,
  ...props
}: IAccordionProps) => {
  const { index: pIndex, defaultIndex, ...newProps } = useThemeProps(
    'Accordion',
    props
  );
  const [index, setIndex] = React.useState(pIndex || defaultIndex || []);
  const changeHandler = (isOpening: boolean, activeIndex: number) => {
    let indexCopy = index.map((i: number) => i);
    if (allowToggle) {
      if (isOpening) {
        indexCopy.push(activeIndex);
        allowMultiple ? setIndex(indexCopy) : setIndex([activeIndex]);
      } else {
        setIndex(index.splice(index.indexOf(activeIndex), 1));
      }
    } else {
      if (isOpening) {
        indexCopy.push(activeIndex);
        allowMultiple ? setIndex(indexCopy) : setIndex([activeIndex]);
      } else {
        remove(indexCopy, (n) => n === activeIndex);
        setIndex(indexCopy);
      }
    }
    onChange && onChange(indexCopy);
  };
  return (
    <AccordionContext.Provider value={{ index: index, changeHandler }}>
      <Box {...newProps}>{getIndexedChildren(children, 'AccordionItem')}</Box>
    </AccordionContext.Provider>
  );
};

Accordion.AccordionItem = AccordionItem;
Accordion.AccordionSummary = AccordionSummary;
Accordion.AccordionDetails = AccordionDetails;
Accordion.AccordionIcon = AccordionIcon;

export default Accordion;
