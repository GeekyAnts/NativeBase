import React from 'react';
import { useThemeProps } from '../../../hooks';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';

const PopoverHeader = (props: IBoxProps, ref?: any) => {
  const style = useThemeProps('Popover', props);
  const { setHeaderMounted, headerId } = React.useContext(PopoverContext);

  React.useEffect(() => {
    setHeaderMounted(true);
    return () => {
      setHeaderMounted(false);
    };
  }, [setHeaderMounted]);
  return (
    <Box
      accessibilityRole="banner"
      nativeID={headerId}
      {...style.popoverHeaderProps}
      {...props}
      ref={ref}
    />
  );
};

export default React.memo(React.forwardRef(PopoverHeader));
