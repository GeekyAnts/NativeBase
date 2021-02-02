import React from 'react';
import Box from '../../primitives/Box';
import { useToken } from '../../../hooks';
import { AccordionItemContext } from './Context';
import Collapse from '../Collapse';
import type { IAccordionPanelProps, IAccordionItemContextProps } from './types';

const AccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  const borderColor = useToken('colors', 'muted.200');
  return (
    <Collapse isOpen={isOpen}>
      <Box p={3} borderColor={borderColor} {...props}>
        {children}
      </Box>
    </Collapse>
  );
};

export default React.memo(AccordionPanel);
