import React from 'react';
import Box from '../../primitives/Box';
import { AccordionItemContext } from './Context';
import Collapse from '../Collapse';
import type { IAccordionPanelProps, IAccordionItemContextProps } from './types';
import { useThemeProps } from '../../../hooks';

const AccordionPanel = ({ children, ...props }: IAccordionPanelProps) => {
  const { ...newProps } = useThemeProps('AccordionPanel', props);
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  return (
    <Collapse isOpen={isOpen}>
      <Box {...newProps}>{children}</Box>
    </Collapse>
  );
};

export default React.memo(AccordionPanel);
