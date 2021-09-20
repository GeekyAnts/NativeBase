import React, { memo, forwardRef } from 'react';
import { default as Box, IBoxProps } from '../Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/useThemeProps/usePropsResolution';

export const InputLeftAddon = memo(
  //@r
  forwardRef((props: IBoxProps, ref?: any) => {
    const resolvedProps = usePropsResolution('InputLeftAddon', props);
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <Box {...resolvedProps} ref={ref}>
        <Box m="auto" _text={resolvedProps._text || { fontWeight: 600 }}>
          {props.children}
        </Box>
      </Box>
    );
  })
);
export const InputRightAddon = memo(
  forwardRef((props: IBoxProps, ref?: any) => {
    const resolvedProps = usePropsResolution('InputRightAddon', props);
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <Box {...resolvedProps} ref={ref}>
        <Box m="auto" _text={resolvedProps._text || { fontWeight: 600 }}>
          {props.children}
        </Box>
      </Box>
    );
  })
);
