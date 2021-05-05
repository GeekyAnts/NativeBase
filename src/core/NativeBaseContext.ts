import React from 'react';

const ThemeContext = React.createContext({});
const { Consumer: ThemeConsumer, Provider: ThemeProvider } = ThemeContext;

export {
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
  ThemeProvider,
};
