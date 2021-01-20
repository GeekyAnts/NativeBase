import React from 'react';
import { AccessibilityInfo } from 'react-native';

export function useScreenReaderEnabled() {
  const [enabled, setEnabled] = React.useState(false);
  const mountedRef = React.useRef(false);

  const handleSetEnabled = (value: boolean) => {
    if (mountedRef.current) {
      setEnabled(value);
    }
  };

  React.useEffect(() => {
    mountedRef.current = true;
    async function setInitialValue() {
      const res = await AccessibilityInfo.isScreenReaderEnabled();
      handleSetEnabled(res);
    }

    let handler: any = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      (event: any) => {
        handleSetEnabled(event);
      }
    );

    setInitialValue();
    return () => {
      mountedRef.current = false;
      AccessibilityInfo.removeEventListener('screenReaderChanged', handler);
    };
  });

  return enabled;
}
