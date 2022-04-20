import React, { memo, forwardRef } from 'react';
import { Input } from '../Input';
import type { InterfaceInputProps } from '../Input/types';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import type { PlatformProps } from '../../../components/types';
export interface ITextAreaProps
  extends Omit<
      InterfaceInputProps,
      '_web' | '_android' | '_ios' | '_light' | '_dark' | '_important'
    >,
    PlatformProps<ITextAreaProps> {
  /**
   * Maps to react-native TextInput's numberOfLines.
   */
  totalLines?: number;
}

const TextArea = (
  { wrapperRef, isDisabled, isInvalid, isReadOnly, ...props }: ITextAreaProps,
  ref: any
) => {
  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };
  const { totalLines, onFocus, onBlur, ...newProps } = usePropsResolution(
    'TextArea',
    props,
    { isHovered, isDisabled, isFocused, isInvalid, isReadOnly },
    { extendTheme: ['Input'] }
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Input
      {...newProps}
      INTERNAL_notResolveThemeAndPseudoProps
      numberOfLines={totalLines}
      wrapperRef={wrapperRef}
      ref={mergeRefs([_ref, ref])}
      onFocus={(e) => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      }}
      onBlur={(e) => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
    />
  );
};

export default memo(forwardRef(TextArea));
