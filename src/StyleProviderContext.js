import { StyleProvider } from 'native-base-shoutem-theme';
import React, { memo } from 'react';

import setDefaultThemeStyle from './init';

export const StyleProviderContext = React.createContext(setDefaultThemeStyle());

export const StyleProviderContextProvider = memo((props) => {
  return (
    <StyleProvider {...props}>
      <StyleProviderContext.Provider value={props.style}>
        {props.children}
      </StyleProviderContext.Provider>
    </StyleProvider>
  );
});
