import React from 'react';
import { Input, IInputProps } from '../Input';
import { usePropsResolution } from '../../../hooks/useThemeProps';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

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

export default React.memo(React.forwardRef(TextArea));
