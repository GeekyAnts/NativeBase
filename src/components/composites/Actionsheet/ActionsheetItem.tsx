import React, { memo, forwardRef } from 'react';
import { Button } from '../../primitives/Button';
import type { IActionsheetItemProps } from './types';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const ActionsheetItem = (props: IActionsheetItemProps, ref?: any) => {
  const resolvedProps = usePropsResolution(
    'ActionsheetItem',
    props,
    undefined,
    {
      cascadePseudoProps: true,
    }
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  return <Button {...resolvedProps} ref={ref} />;
};

export default memo(forwardRef(ActionsheetItem));
