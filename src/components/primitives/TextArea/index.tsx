import React from 'react';
import { Input, IInputProps } from '../Input';
import { useThemeProps } from '../../../hooks';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

const TextArea = ({ ...props }: ITextAreaProps, ref: any) => {
  const { totalLines, ...newProps } = useThemeProps('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} ref={ref} />;
};

export default React.memo(React.forwardRef(TextArea));
