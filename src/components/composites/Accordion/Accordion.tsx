import React from 'react';
import Box from '../../primitives/Box';
import type { IAccordionProps } from './types';
import { useThemeProps } from '../../../hooks';
import getIndexedChildren from '../../../utils/getIndexedChildren';
import { AccordionContext } from './Context';

const Accordion = (
  {
    children,
    index: pIndex,
    defaultIndex,
    allowMultiple,
    allowToggle,
    onChange,
    ...props
  }: IAccordionProps,
  ref: any
) => {
  const {
    endingHeight,
    startingHeight,
    duration,
    isOpen,
    onAnimationEnd,
    onAnimationStart,
    ...newProps
  } = useThemeProps('Accordion', props);

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
        indexCopy = indexCopy.filter((n) => n !== activeIndex);
        setIndex(indexCopy);
      }
    }
    onChange && onChange(indexCopy);
  };
  return (
    <AccordionContext.Provider
      value={{
        index: index,
        changeHandler,
        AnimationProps: {
          endingHeight,
          startingHeight,
          duration,
          isOpen,
          onAnimationEnd,
          onAnimationStart,
        },
      }}
    >
      <Box overflow="hidden" {...newProps} ref={ref}>
        {getIndexedChildren(children)}
      </Box>
    </AccordionContext.Provider>
  );
};

export default React.memo(React.forwardRef(Accordion));
