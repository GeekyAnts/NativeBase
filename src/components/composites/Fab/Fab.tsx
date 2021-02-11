import React from 'react';
import { omitUndefined } from '../../../theme/tools/utils';
import Button from '../../primitives/Button';
import { HStack } from '../../primitives/Stack';
import type { IFabProps } from './types';

const Fab = (props: IFabProps, ref: any) => {
  const { label, icon, placement, ...newProps } = omitUndefined(props);

  const placementProps: any = {
    topRight: { top: 4, right: 4, position: 'absolute' },
    topLeft: { top: 4, left: 4, position: 'absolute' },
    bottomRight: { bottom: 4, right: 4, position: 'absolute' },
    bottomLeft: { bottom: 4, left: 4, position: 'absolute' },
  };
  return (
    <Button
      variant="unstyled"
      bg="default.200"
      rounded="full"
      zIndex={20}
      p={2}
      {...placementProps[placement]}
      {...newProps}
      ref={ref}
    >
      {icon && label ? (
        <HStack space={1} justifyContent="center" alignItems="center">
          {icon}
          {label}
        </HStack>
      ) : (
        icon ?? label
      )}
    </Button>
  );
};

export default React.memo(React.forwardRef<any, IFabProps>(Fab));
