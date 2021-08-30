import React from 'react';
import { usePropsResolution } from '../../../hooks';
import { Popper } from '../Popper';
import type { IBoxProps } from '../../primitives/Box';

const PopoverArrow = React.forwardRef((props: IBoxProps, ref: any) => {
  const resolvedProps = usePropsResolution('PopoverArrow', props);

  return <Popper.Arrow {...props} {...resolvedProps} ref={ref} />;
});

PopoverArrow.displayName = 'PopperArrow';

export default PopoverArrow;
