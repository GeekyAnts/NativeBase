import React from 'react';

export const ExitAnimationContext = React.createContext({
  exited: true,
  setExited: (_exited: boolean) => {},
});
