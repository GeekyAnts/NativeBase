import { Overlay } from '../../primitives/Overlay';
import { PresenceTransition } from '../Transitions';
import VStack from '../../primitives/Stack/VStack';
import React, {
  createContext,
  MutableRefObject,
  useState,
  useMemo,
} from 'react';
import { AccessibilityInfo, Platform, SafeAreaView } from 'react-native';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import type { IToastContext, IToastInfo, IToast, IToastProps } from './types';
import { useKeyboardBottomInset } from '../../../utils';

const INSET = 50;

const POSITIONS = {
  'top': {
    top: INSET,
    left: 0,
    right: 0,
  },
  'top-right': {
    top: INSET,
    right: 0,
  },
  'top-left': {
    top: INSET,
    left: 0,
  },
  'bottom': {
    bottom: INSET,
    left: 0,
    right: 0,
  },
  'bottom-left': {
    bottom: INSET,
    left: 0,
  },
  'bottom-right': {
    bottom: INSET,
    right: 0,
  },
};

const initialAnimationOffset = 24;

const transitionConfig: any = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top-right': -initialAnimationOffset,
  'top-left': -initialAnimationOffset,
  'bottom-left': initialAnimationOffset,
  'bottom-right': initialAnimationOffset,
};

const ToastContext = createContext<IToastContext>({
  toastInfo: {},
  setToastInfo: () => {},
  setToast: () => {},
  removeToast: () => {},
  hideAll: () => {},
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {},
  hideToast: () => {},
});

const CustomToast = ({ _overlay, _stack, _presenceTransition }: any) => {
  const { toastInfo, visibleToasts, removeToast } = React.useContext(
    ToastContext
  );

  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };

  let hasToastOnOverlay = false;
  getPositions().map((position) => {
    if (toastInfo[position]?.length > 0) hasToastOnOverlay = true;
  });

  return getPositions().length > 0 ? (
    <Overlay
      {..._overlay}
      isOpen={hasToastOnOverlay}
      isKeyboardDismissable={false}
    >
      {getPositions().map((position: string) => {
        if (Object.keys(POSITIONS).includes(position))
          return (
            <VStack
              {..._stack}
              key={position}
              // @ts-ignore
              {...POSITIONS[position]}
            >
              {
                // @ts-ignore
                toastInfo[position].map((toast: IToast) => (
                  <PresenceTransition
                    {..._presenceTransition}
                    key={toast.id}
                    visible={visibleToasts[toast.id]}
                    onTransitionComplete={(status: any) => {
                      if (status === 'exited') {
                        removeToast(toast.id);
                        toast.config?.onCloseComplete &&
                          toast.config?.onCloseComplete();
                      }
                    }}
                    initial={{
                      opacity: 0,
                      translateY: transitionConfig[position],
                    }}
                  >
                    <SafeAreaView>
                      <Box
                        bottom={
                          ['bottom', 'bottom-left', 'bottom-right'].includes(
                            position
                          ) && toast.config?.avoidKeyboard
                            ? bottomInset + 'px'
                            : undefined
                        }
                      >
                        {toast.component}
                      </Box>
                    </SafeAreaView>
                  </PresenceTransition>
                ))
              }
            </VStack>
          );
        else return null;
      })}
    </Overlay>
  ) : null;
};

export const ToastProvider = ({ children }: { children: any }) => {
  const [toastInfo, setToastInfo] = useState<IToastInfo>({});
  const [visibleToasts, setVisibleToasts] = useState<
    {
      [key in string]: boolean;
    }
  >({});

  const [themeProps] = useState(usePropsResolution('Toast', {}));
  const toastIndex = React.useRef(1);

  const hideAll = React.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);

  const hideToast = React.useCallback(
    (id: any) => {
      setVisibleToasts((prevVisibleToasts) => ({
        ...prevVisibleToasts,
        [id]: false,
      }));
    },
    [setVisibleToasts]
  );

  const isActive = React.useCallback(
    (id: any) => {
      for (const toastPosition of Object.keys(toastInfo)) {
        const positionArray: Array<IToast> = toastInfo[toastPosition];
        return positionArray.findIndex((toastData) => toastData.id === id) > -1;
      }

      return false;
    },
    [toastInfo]
  );

  const removeToast = React.useCallback(
    (id: any) => {
      setToastInfo((prev) => {
        for (const toastPosition of Object.keys(prev)) {
          const positionArray: Array<IToast> = prev[toastPosition];
          const isToastPresent =
            positionArray.findIndex((toastData) => toastData.id === id) > -1;

          if (isToastPresent) {
            const newPositionArray = positionArray.filter(
              (item) => item.id !== id
            );
            const temp: any = {};
            temp[toastPosition] = newPositionArray;

            const newToastInfo = { ...prev, ...temp };
            return newToastInfo;
          }
        }

        return prev;
      });
    },
    [setToastInfo]
  );

  const setToast = React.useCallback(
    (props: IToastProps): number => {
      const {
        placement = 'bottom',
        title,
        render,
        id = toastIndex.current++,
        description,
        duration = 5000,
        _title,
        _description,
        accessibilityAnnouncement,
        // @ts-ignore
        avoidKeyboard = false, //eslint-disable-line
        ...rest
      } = props;

      let positionToastArray = toastInfo[placement];
      if (!positionToastArray) positionToastArray = [];

      let component = null;

      if (render) {
        component = render({ id });
      } else {
        component = (
          // Below VStack is the default component where all the direct props spread.
          <VStack {...themeProps} {...rest}>
            <Box _text={{ ...themeProps._title, ..._title }}>{title}</Box>
            {description && (
              <Box _text={{ ...themeProps._description, ..._description }}>
                {description}
              </Box>
            )}
          </VStack>
        );
      }

      toastInfo[placement] = [
        ...positionToastArray,
        { component, id, config: props },
      ];

      setToastInfo({ ...toastInfo });

      setVisibleToasts({ ...visibleToasts, [id]: true });
      if (duration !== null) {
        setTimeout(function () {
          hideToast(id);
        }, duration);
      }

      // iOS doesn't support accessibilityLiveRegion
      if (accessibilityAnnouncement && Platform.OS === 'ios') {
        AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
      }

      return id;
    },
    [themeProps, toastInfo, visibleToasts, hideToast]
  );

  const contextValue = React.useMemo(() => {
    return {
      toastInfo,
      setToastInfo,
      setToast,
      removeToast,
      hideAll,
      isActive,
      visibleToasts,
      setVisibleToasts,
      hideToast,
    };
  }, [
    toastInfo,
    setToastInfo,
    setToast,
    removeToast,
    hideAll,
    isActive,
    visibleToasts,
    setVisibleToasts,
    hideToast,
  ]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <CustomToast
        _overlay={themeProps._overlay}
        _stack={themeProps._stack}
        _presenceTransition={themeProps._presenceTransition}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { setToast, hideAll, isActive, hideToast } = React.useContext(
    ToastContext
  );

  const toast = useMemo(
    () => ({
      show: setToast,
      close: hideToast,
      closeAll: hideAll,
      isActive,
    }),
    [setToast, hideAll, isActive, hideToast]
  );

  return toast;
};

export type IToastService = ReturnType<typeof useToast>;

export const ToastRef = React.createRef<IToastService>() as MutableRefObject<IToastService>;

export const Toast: IToastService = {
  show: (props: IToastProps) => ToastRef.current?.show(props),
  close: (id: any) => ToastRef.current?.close(id),
  closeAll: () => ToastRef.current?.closeAll(),
  isActive: (id: any) => ToastRef.current?.isActive(id),
};
