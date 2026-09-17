import { BackHandler } from 'react-native';
import { renderHook } from '@testing-library/react-hooks';
import { useBackHandler } from '../../hooks/useKeyboardDismissable';

describe('useBackHandler', () => {
  it('registers and removes the BackHandler subscription', () => {
    const callback = jest.fn();
    const remove = jest.fn();

    const addEventListenerSpy = jest
      .spyOn(BackHandler, 'addEventListener')
      .mockReturnValue({
        remove,
      });

    const { unmount } = renderHook(() =>
      useBackHandler({
        enabled: true,
        callback,
      })
    );

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'hardwareBackPress',
      expect.any(Function)
    );

    unmount();

    expect(remove).toHaveBeenCalledTimes(1);

    addEventListenerSpy.mockRestore();
  });

  it('does not register a BackHandler when disabled', () => {
    const callback = jest.fn();

    const addEventListenerSpy = jest.spyOn(BackHandler, 'addEventListener');

    const { unmount } = renderHook(() =>
      useBackHandler({
        enabled: false,
        callback,
      })
    );

    expect(addEventListenerSpy).not.toHaveBeenCalled();

    unmount();

    addEventListenerSpy.mockRestore();
  });
});
