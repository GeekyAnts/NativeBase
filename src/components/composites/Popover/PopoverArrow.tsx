import React from 'react';
import { usePropsResolution } from '../../../hooks';
import { Popper } from '../Popper';
import type { IBoxProps } from '../../primitives/Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const PopoverArrow = React.forwardRef((props: IBoxProps, ref: any) => {
  const themeProps = usePropsResolution('PopoverArrow', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return <Popper.Arrow {...props} {...themeProps} ref={ref} />;
});

PopoverArrow.displayName = 'PopperArrow';

export default PopoverArrow;
