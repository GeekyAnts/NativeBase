import React from 'react';
import Icon from '../../primitives/Icon';
import type { IAccordionIconProps, IAccordionItemContextProps } from './props';
import { AccordionItemContext } from './Context';

const AccordionIcon = ({ ...props }: IAccordionIconProps) => {
  const { isOpen }: IAccordionItemContextProps = React.useContext(
    AccordionItemContext
  );
  return (
    <Icon
      name={isOpen ? 'chevron-small-up' : 'chevron-small-down'}
      type="Entypo"
      {...props}
    />
  );
};

export default React.memo(AccordionIcon);
