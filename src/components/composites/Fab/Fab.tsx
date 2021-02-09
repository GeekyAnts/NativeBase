import React from 'react';
import { omitUndefined } from '../../../theme/tools/utils';
import IconButton from '../IconButton';
import type { IFabProps } from './types';

const Fab = (props: IFabProps) => {
  const { placement, ...newProps } = omitUndefined(props);

  const placementProps: any = {
    topRight: { top: 4, right: 4, position: 'absolute' },
    topLeft: { top: 4, left: 4, position: 'absolute' },
    bottomRight: { bottom: 4, right: 4, position: 'absolute' },
    bottomLeft: { bottom: 4, left: 4, position: 'absolute' },
  };
  return (
    <IconButton
      variant="unstyled"
      bg="default.200"
      rounded="full"
      zIndex={20}
      p={2}
      {...placementProps[placement]}
      {...newProps}
    />
  );
};

export default React.memo(Fab);
