import { FocusScopeContext } from './FocusScopeContext';
import React, { useState, MutableRefObject } from 'react';

const FocusScopeProvider = ({ children }: any) => {
  const [FocusScopeRef, setScope] = useState<Array<MutableRefObject<any>>>([]);

  const setFocusScopeRef = (RefScope: any) => {
    setScope((prev) => {
      return [...prev, RefScope];
    });
  };

  const isFocusScopeContain = (FocusRef: any): boolean => {
    if (FocusScopeRef[FocusScopeRef.length - 1] === FocusRef) return true;
    return false;
  };

  const popFocusScopeRef = () => {
    setScope((prev) => {
      return prev.slice(0, prev.length - 1);
    });
  };

  return (
    <FocusScopeContext.Provider
      value={{ setFocusScopeRef, isFocusScopeContain, popFocusScopeRef }}
    >
      {children}
    </FocusScopeContext.Provider>
  );
};

export { FocusScopeProvider };
