import React from 'react';
import type { TextInput } from 'react-native';
import { default as Input, IInputProps } from '../Input';
import { usePropsConfig } from '../../../hooks';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

const TextArea = ({ totalLines, ...props }: ITextAreaProps, ref: any) => {
  const newProps = usePropsConfig('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} ref={ref} />;
};

export default React.forwardRef<TextInput, ITextAreaProps>(TextArea);
