jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}));