import React from 'react';
// import { Clipboard } from 'react-native'; 'Clipboard' is deprecated.
import Clipboard from '@react-native-clipboard/clipboard';

export function useClipboard() {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [value, setValue] = React.useState<string>('');
  const onCopy = (copiedValue: string) => {
    if (Clipboard) {
      Clipboard.setString(copiedValue);
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
