import React from 'react';
import Box from '../../primitives/Box';
import { AccordionItemContext } from './Context';
import Collapse from '../Collapse';
import type {
  IAccordionDetailsProps,
  IAccordionItemContextProps,
} from './types';
import { useThemeProps } from '../../../hooks';

const AccordionDetails = ({ children, ...props }: IAccordionDetailsProps) => {
  const { ...newProps } = useThemeProps('AccordionDetails', props);
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  return (
    <Collapse isOpen={isOpen}>
      <Box {...newProps}>{children}</Box>
    </Collapse>
  );
};

export default React.memo(AccordionDetails);
