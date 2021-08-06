import React, { memo, forwardRef } from 'react';
import { Input, IInputProps } from '../Input';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils/mergeRefs';
import { usePropsResolution } from '../../../hooks/useThemeProps';
export interface ITextAreaProps extends IInputProps {
  /**
   * Maps to react-native TextInput's numberOfLines.
   */
  totalLines?: number;
}

const TextArea = ({ wrapperRef, ...props }: ITextAreaProps, ref: any) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const { totalLines, ...newProps } = usePropsResolution('TextArea', props, {
    isHovered,
  });
  return (
    <Input
      {...newProps}
      numberOfLines={totalLines}
      wrapperRef={wrapperRef}
      ref={mergeRefs([ref, _ref])}
    />
  );
};

export default memo(forwardRef(TextArea));
