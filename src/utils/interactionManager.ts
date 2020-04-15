import { InteractionManager } from 'react-native';

export default {
  ...InteractionManager,
  runAfterInteractions: (f: () => void) => {
    let called = false;
    const timeout = setTimeout(() => {
      called = true;
      f();
    }, 10);

    InteractionManager.runAfterInteractions(() => {
      if (called) return;
      clearTimeout(timeout);
      f();
    });
  },
};
