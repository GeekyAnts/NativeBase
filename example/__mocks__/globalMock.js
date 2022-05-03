jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}));

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }) => children;
  return { KeyboardAwareScrollView };
});
