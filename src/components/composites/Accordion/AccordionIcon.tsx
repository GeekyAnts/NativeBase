import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../../primitives/Icon/Icons';
import type { IAccordionIconProps, IAccordionItemContextProps } from './types';
import { AccordionItemContext } from './Context';
import { useThemeProps } from '../../../hooks';

const AccordionIcon = ({ ...props }: IAccordionIconProps, ref?: any) => {
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  const { ...newProps } = useThemeProps('AccordionIcon', props);
  return isOpen ? (
    <ChevronUpIcon color="white" {...newProps} ref={ref} />
  ) : (
    <ChevronDownIcon {...newProps} ref={ref} />
  );
};

export default React.memo(React.forwardRef(AccordionIcon));
