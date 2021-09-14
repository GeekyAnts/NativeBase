import React from 'react';
export const AlertDialogContext = React.createContext({
  handleClose: () => {},
  contentSize: {},
  initialFocusRef: { current: null },
  finalFocusRef: { current: null },
});
