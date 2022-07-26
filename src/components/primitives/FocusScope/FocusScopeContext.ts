import React from 'react';
import type { InterFaceFocusScope } from './types';

const FocusScopeContext = React.createContext<InterFaceFocusScope>({
  setFocusScopeRef: (_val) => {},
  isFocusScopeContain: (_val): boolean => false,
  popFocusScopeRef: () => {},
});

export { FocusScopeContext };
