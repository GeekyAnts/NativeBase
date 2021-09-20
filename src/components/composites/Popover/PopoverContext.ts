import React, { RefObject } from 'react';

export const PopoverContext = React.createContext({
  onClose: () => {},
  initialFocusRef: { current: null } as RefObject<any> | undefined,
  finalFocusRef: { current: null } as RefObject<any> | undefined,
  popoverContentId: undefined as string | undefined,
  headerId: undefined as string | undefined,
  bodyId: undefined as string | undefined,
  setHeaderMounted: (() => {}) as any,
  setBodyMounted: (() => {}) as any,
  headerMounted: false,
  bodyMounted: false,
});
