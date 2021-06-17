import React from 'react';
import { Clipboard } from 'react-native';

export function useClipboard() {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [value, setValue] = React.useState<string>('');
  const onCopy = async (copiedValue: string) => {
    if (Clipboard) {
      await Clipboard.setString(copiedValue);
    }
    setValue(copiedValue);
    setHasCopied(true);
  };
  return {
    value,
    onCopy,
    hasCopied,
  };
}
