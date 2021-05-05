import { useThemeProps } from '../../../hooks';
import React from 'react';
import { default as Box, IBoxProps } from '../../primitives/Box';
import { PopoverContext } from './PopoverContext';

const PopoverBody = (props: IBoxProps, ref?: any) => {
  const style = useThemeProps('Popover', props);
  const { setBodyMounted, bodyId } = React.useContext(PopoverContext);

  React.useEffect(() => {
    setBodyMounted(true);
    return () => {
      setBodyMounted(false);
    };
  }, [setBodyMounted]);

  return (
    <Box nativeID={bodyId} {...style.popoverBodyProps} {...props} ref={ref} />
  );
};

export default React.memo(React.forwardRef(PopoverBody));
