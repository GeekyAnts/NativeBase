import React from 'react';
import { usePropsResolution } from '../../../hooks';
import { Popper } from '../Popper';
import type { IBoxProps } from '../../primitives/Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverArrow = React.forwardRef((props: IBoxProps, ref: any) => {
  const resolvedProps = usePropsResolution('PopoverArrow', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Popper.Arrow {...props} {...resolvedProps} ref={ref} />;
});

PopoverArrow.displayName = 'PopperArrow';

export default PopoverArrow;
