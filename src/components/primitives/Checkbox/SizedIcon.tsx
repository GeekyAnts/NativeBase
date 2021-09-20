import { Box, CheckIcon } from 'native-base';
import React from 'react';

const SizedIcon = ({
  icon,
  _icon,
  isChecked,
}: {
  icon: JSX.Element;
  _icon: any;
  isChecked: boolean;
}) => {
  return isChecked ? (
    icon ? (
      React.cloneElement(icon, {
        ..._icon,
      })
    ) : (
      <CheckIcon {..._icon} />
    )
  ) : (
    <Box {..._icon} />
  );
};

export default SizedIcon;
