import { FocusScope as AriaFocusScope } from '@react-native-aria/focus';
import React, { useEffect, useRef } from 'react';
import { FocusScopeContext } from './FocusScopeProvider';
export const FocusScope = ({ children, contain, ...props }: any) => {
  const { focusedScope, setFocusedScope } = React.useContext(FocusScopeContext);
  const ref = useRef(null);

  useEffect(() => {
    setFocusedScope(ref);
  }, [ref, setFocusedScope]);

  const getVisible = () => {
    return contain && focusedScope[focusedScope.length - 1] === ref;
  };

  return (
    <AriaFocusScope {...props} contain={getVisible()} ref={ref}>
      {children}
    </AriaFocusScope>
  );
};
