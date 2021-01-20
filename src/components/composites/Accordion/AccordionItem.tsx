import React from 'react';
import Box from '../../primitives/Box';
import { AccordionContext, AccordionItemContext } from './Context';
import type { IAccordionItemProps, IAccordionContextProps } from './props';

const AccordionItem = ({
  children,
  index: pIndex = 0,
  isDisabled,
  ...props
}: IAccordionItemProps) => {
  const {
    index: cIndex,
    changeHandler,
  }: IAccordionContextProps = React.useContext(AccordionContext);
  const isOpen = cIndex?.includes(pIndex);
  const onClose = (cb?: () => void) => {
    changeHandler && changeHandler(false, pIndex);
    cb && cb();
  };
  const onOpen = (cb?: () => void) => {
    changeHandler && changeHandler(true, pIndex);
    cb && cb();
  };
  const childSetter = () => {
    if (typeof children === 'function')
      return children({ isExpanded: isOpen, isDisabled });
    return children;
  };
  return (
    <AccordionItemContext.Provider
      value={{
        isOpen,
        isDisabled,
        onClose,
        onOpen,
      }}
    >
      <Box {...props}>{childSetter()}</Box>
    </AccordionItemContext.Provider>
  );
};

export default React.memo(AccordionItem);
