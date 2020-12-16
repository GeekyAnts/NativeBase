import React from 'react';
import { NativeModules } from 'react-native';

export function useClipboard() {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [value, setValue] = React.useState<string>('');
  const onCopy = async (copiedValue: string) => {
    if (typeof window !== 'undefined') {
      const textField = document.createElement('textarea');
      textField.innerText = copiedValue;
      document.body.appendChild(textField);
      if (window.navigator.platform === 'iPhone') {
        textField.setSelectionRange(0, 99999);
      } else {
        textField.select();
      }
      document.execCommand('copy');
      textField.remove();
    } else if (NativeModules && NativeModules.Clipboard) {
      await NativeModules.Clipboard.setString(copiedValue);
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
