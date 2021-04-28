import { OverlayContainer } from '@react-native-aria/overlays';
import { Transition } from '../Transitions';
import VStack from '../../primitives/Stack/VStack';
import { Alert } from '../../composites/Alert';
import Icon from '../../primitives/Icon';
import React, { createContext, ReactNode, useState } from 'react';
import {
  AccessibilityInfo,
  Easing,
  Platform,
  SafeAreaView,
} from 'react-native';
import IconButton from '../IconButton';

let INSET = 0;

const POSITIONS = {
  'bottom': {
    bottom: INSET,
    left: 0,
    right: 0,
  },
  'top': {
    top: INSET,
    left: 0,
    right: 0,
  },
  'top-right': {
    top: INSET,
    right: INSET,
  },
  'top-left': {
    top: INSET,
    left: INSET,
  },
  'bottom-left': {
    bottom: INSET,
    left: INSET,
  },
  'bottom-right': {
    bottom: INSET,
    right: INSET,
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

type IToastProps = {
  // The description of the toast
  description?: ReactNode;
  // The delay before the toast hides (in milliseconds) If set to `null`, toast will never dismiss.
  duration?: number;
  // The `id` of the toast. Mostly used when you need to prevent duplicate. By default, we generate a unique `id` for each toast
  id?: any;
  // If `true`, toast will show a close button
  isClosable?: boolean;
  // Callback function to run side effects after the toast has closed.
  onCloseComplete?: () => void;
  // The placement of the toast. Defaults to bottom
  position?: keyof typeof POSITIONS;
  // Render a component toast component. Any component passed will receive 2 props: `id` and `onClose`.
  render?: (props: any) => ReactNode;
  // The status of the toast.
  status?: 'info' | 'warning' | 'error' | 'success';
  // The title of the toast
  title?: ReactNode;
  // The alert component `variant` to use
  variant?: any;

  accessibilityAnnouncement?: string;

  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive';
};

type IToast = {
  id: number;
  component: any;
  config?: IToastProps;
};

type IToastInfo = {
  [key in keyof typeof POSITIONS]?: Array<IToast>;
};

type IToastContext = {
  toastInfo: IToastInfo;
  setToastInfo: any;
  setToast: (props: IToastProps) => void;
  removeToast: (id: any) => void;
  hideAll: () => void;
  isActive: (id: any) => boolean;
  visibleToasts: any;
  setVisibleToasts: any;
  hideToast: (id: any) => void;
};

export const ToastContext = createContext<IToastContext>({
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

export const CustomToast = () => {
  const { toastInfo, visibleToasts, removeToast } = React.useContext(
    ToastContext
  );

  const getPositions = () => {
    return Object.keys(toastInfo);
  };

  return getPositions().length > 0 ? (
    <OverlayContainer>
      {getPositions().map((position: string) => {
        if (Object.keys(POSITIONS).includes(position))
          return (
            <VStack
              margin="auto"
              key={position}
              // @ts-ignore
              {...POSITIONS[position]}
              position="absolute"
              space={2}
              alignItems="center"
              justifyContent="center"
            >
              {
                // @ts-ignore
                toastInfo[position].map((toast: IToast) => (
                  <Transition
                    key={toast.id}
                    visible={visibleToasts[toast.id]}
                    onTransitionComplete={(status: any) => {
                      if (status === 'exited') {
                        removeToast(toast.id);
                        toast.config?.onCloseComplete &&
                          toast.config?.onCloseComplete();
                      }
                    }}
                    from={{
                      opacity: 0,
                      translateY: transitionConfig[position],
                    }}
                    entry={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.85,
                    }}
                    transition={{
                      easing: Easing.ease,
                    }}
                  >
                    <SafeAreaView>{toast.component}</SafeAreaView>
                  </Transition>
                ))
              }
            </VStack>
          );
        else return null;
      })}
    </OverlayContainer>
  ) : null;
};

export const ToastProvider = ({ children }: { children: any }) => {
  const [toastInfo, setToastInfo] = useState<IToastInfo>({});
  const [visibleToasts, setVisibleToasts] = useState<IToastInfo>({});
  let toastIndex = React.useRef(0);

  const hideAll = () => {
    setVisibleToasts({});
  };

  const hideToast = (id: any) => {
    setVisibleToasts((prevVisibleToasts) => ({
      ...prevVisibleToasts,
      [id]: false,
    }));
  };

  const isActive = (id: any) => {
    for (let toastPosition of Object.keys(toastInfo)) {
      // @ts-ignore
      let positionArray: Array<IToast> = toastInfo[toastPosition];
      return positionArray.findIndex((toastData) => toastData.id === id) > -1;
    }

    return false;
  };

  const removeToast = (id: any) => {
    setToastInfo((prev) => {
      for (let toastPosition of Object.keys(prev)) {
        // @ts-ignore
        let positionArray: Array<IToast> = prev[toastPosition];
        const isToastPresent =
          positionArray.findIndex((toastData) => toastData.id === id) > -1;

        if (isToastPresent) {
          let newPositionArray = positionArray.filter((item) => item.id !== id);
          let temp: any = {};
          temp[toastPosition] = newPositionArray;

          let newToastInfo = { ...prev, ...temp };
          return newToastInfo;
        }
      }

      return prev;
    });
  };

  const setToast = (props: IToastProps) => {
    const {
      position = 'bottom',
      title,
      render,
      status = 'info',
      id = toastIndex.current++,
      description,
      isClosable = true,
      duration = 5000,
      variant,
      accessibilityAnnouncement,
      accessibilityLiveRegion = 'polite',
    } = props;
    let positionToastArray = toastInfo[position];
    if (!positionToastArray) positionToastArray = [];

    let component = null;

    if (render) {
      component = render({ id: toastIndex.current });
    } else if (typeof status === 'string') {
      component = (
        <Alert
          status={status ?? 'info'}
          variant={variant}
          accessibilityLiveRegion={accessibilityLiveRegion}
          action={
            isClosable ? (
              <IconButton
                onPress={() => {
                  hideToast(id);
                }}
                icon={<Icon size="xs" name="close" />}
              />
            ) : undefined
          }
        >
          <Alert.Icon />
          <VStack>
            <Alert.Title>{title}</Alert.Title>
            {description ? (
              <Alert.Description>{description}</Alert.Description>
            ) : null}
          </VStack>
        </Alert>
      );
    }

    toastInfo[position] = [
      ...positionToastArray,
      { component, id, config: props },
    ];

    setToastInfo({ ...toastInfo });

    setVisibleToasts({ ...visibleToasts, [id]: true });

    setTimeout(function () {
      hideToast(id);
    }, duration);

    // iOS doesn't support accessibilityLiveRegion
    if (accessibilityAnnouncement && Platform.OS === 'ios') {
      AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
    }

    return id;
  };

  return (
    <ToastContext.Provider
      value={{
        toastInfo,
        setToastInfo,
        setToast,
        removeToast,
        hideAll,
        isActive,
        visibleToasts,
        setVisibleToasts,
        hideToast,
      }}
    >
      {children}
      <CustomToast />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { setToast, hideAll, isActive, hideToast } = React.useContext(
    ToastContext
  );

  const toast = {
    show: setToast,
    close: hideToast,
    closeAll: hideAll,
    isActive,
  };

  return toast;
};
