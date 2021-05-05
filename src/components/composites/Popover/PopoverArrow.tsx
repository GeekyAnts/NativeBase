import React from 'react';
import { useThemeProps } from '../../../hooks';
import { Popper } from '../Popper';
import type { IBoxProps } from '../../primitives/Box';

const PopoverArrow = React.forwardRef((props: IBoxProps, ref: any) => {
  const themeProps = useThemeProps('Popover', props);

  return (
    <Popper.Arrow {...props} {...themeProps.popoverArrowProps} ref={ref} />
  );
});

PopoverArrow.displayName = 'PopperArrow';

export default PopoverArrow;
