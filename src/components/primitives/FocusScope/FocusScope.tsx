/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FocusScope as AriaFocusScope } from '@react-native-aria/focus';
import type { IFocusScopeProps } from './types';
import { FocusScopeContext } from './FocusScopeContext';
import Box from '../Box';

const FocusScope = ({ children, contain, ...props }: IFocusScopeProps) => {
  const {
    setFocusScopeRef,
    isFocusScopeContain,
    popFocusScopeRef,
  } = React.useContext(FocusScopeContext);

  const focusScopeRef = React.useRef(null);

  useEffect(() => {
    if (focusScopeRef.current) {
      setFocusScopeRef(focusScopeRef.current);
    }
  }, [focusScopeRef, contain]);

  useEffect(() => {
    if (contain === false) {
      popFocusScopeRef();
    }
  }, [contain]);

  const isContain = () => {
    return isFocusScopeContain(focusScopeRef.current);
  };

  /* Todo: stoping mounted and unMounted everytime contain is change */
  if (contain === false) return <></>;

  return (
    <AriaFocusScope contain={contain && isContain()} {...props}>
      {children}
      {/* AriaFocus Scope doesn't support ref and to get a ref when FocusScope is mounted we have attached Box */}
      <Box ref={focusScopeRef}></Box>
    </AriaFocusScope>
  );
};

export default FocusScope;
