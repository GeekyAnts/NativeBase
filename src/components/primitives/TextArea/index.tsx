import React from 'react';
import { Input, IInputProps } from '../Input';
import { usePropsResolution } from '../../../hooks/useThemeProps';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

const TextArea = ({ ...props }: ITextAreaProps, ref: any) => {
  const { totalLines, ...newProps } = usePropsResolution('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} ref={ref} />;
};

export default React.memo(React.forwardRef(TextArea));
