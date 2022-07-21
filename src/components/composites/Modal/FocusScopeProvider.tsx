import { createContext, useState } from 'react';
import React from 'react';
type IFocuedScopeContext = {
  focusedScope: Array<any>;
  setFocusedScope: (ref: any) => void;
};
export const FocusScopeContext = createContext<IFocuedScopeContext>({
  focusedScope: [null],
  setFocusedScope: () => {},
});
export const FocusScopeProvider = ({ children }: { children: any }) => {
  const [focusedScope, setFocusedScope] = useState([]);
  const contextValue = {
    focusedScope,
    setFocusedScope,
  };

  return (
    <FocusScopeContext.Provider value={contextValue}>
      {children}
    </FocusScopeContext.Provider>
  );
};
