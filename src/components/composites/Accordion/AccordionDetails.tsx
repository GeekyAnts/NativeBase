import React from 'react';
import { AccordionContext, AccordionItemContext } from './Context';
import Collapse from '../Collapse';
import type {
  IAccordionDetailsProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
} from './types';
import { useThemeProps } from '../../../hooks';

const AccordionDetails = (
  { children, ...props }: IAccordionDetailsProps,
  ref?: any
) => {
  const { ...newProps } = useThemeProps('AccordionDetails', props);
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  const { AnimationProps }: IAccordionContextProps = React.useContext(
    AccordionContext
  );
  return (
    <Collapse {...AnimationProps} {...newProps} isOpen={isOpen} ref={ref}>
      {children}
    </Collapse>
  );
};

export default React.memo(React.forwardRef(AccordionDetails));
