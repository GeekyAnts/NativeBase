import React, { memo, forwardRef } from 'react';
import { Input, IInputProps } from '../Input';
import { usePropsResolution } from '../../../hooks/useThemeProps';
export interface ITextAreaProps extends IInputProps {
  /**
   * Maps to react-native TextInput's numberOfLines.
   */
  totalLines?: number;
}

const TextArea = ({ wrapperRef, ...props }: ITextAreaProps, ref: any) => {
  const { totalLines, ...newProps } = usePropsResolution('TextArea', props);
  return (
    <Input
      {...newProps}
      numberOfLines={totalLines}
      wrapperRef={wrapperRef}
      ref={ref}
    />
  );
};

export default memo(forwardRef(TextArea));
