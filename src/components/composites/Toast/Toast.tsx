import { OverlayContainer } from '@react-native-aria/overlays';
import { PresenceTransition } from '../Transitions';
import VStack from '../../primitives/Stack/VStack';
import { Alert } from '../../composites/Alert';
import React, { createContext, useState } from 'react';
import {
  AccessibilityInfo,
  Easing,
  Platform,
  SafeAreaView,
} from 'react-native';
import IconButton from '../IconButton';
import Box from '../../primitives/Box';
import { useThemeProps } from '../../../hooks';
import { CloseIcon } from '../../primitives/Icon/Icons';
import type { IToastContext, IToastInfo, IToast, IToastProps } from './types';

let INSET = 50;

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

const CustomToast = () => {
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
                  <PresenceTransition
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
                    animate={{
                      opacity: 1,
                      transition: { easing: Easing.ease, duration: 250 },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.85,
                      transition: { easing: Easing.ease, duration: 100 },
                    }}
                  >
                    <SafeAreaView>{toast.component}</SafeAreaView>
                  </PresenceTransition>
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
  const [visibleToasts, setVisibleToasts] = useState<
    { [key in string]: boolean }
  >({});
  const themeProps = useThemeProps('Toast', {});
  let toastIndex = React.useRef(1);

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

  const setToast = (props: IToastProps): number => {
    const {
      placement = 'bottom',
      title,
      render,
      status,
      id = toastIndex.current++,
      description,
      isClosable = true,
      duration = 5000,
      variant,
      accessibilityAnnouncement,
      accessibilityLiveRegion = 'polite',
      ...rest
    } = props;
    let positionToastArray = toastInfo[placement];
    if (!positionToastArray) positionToastArray = [];

    let component = null;

    if (render) {
      component = render({ id: toastIndex.current });
    } else if (!status && !variant) {
      component = (
        <VStack space={1} {...themeProps} {...rest}>
          <Box _text={themeProps._title}>{title}</Box>
          {description && (
            <Box _text={themeProps._description}>{description}</Box>
          )}
        </VStack>
      );
    } else if (status || variant) {
      component = (
        <Alert
          status={status ?? 'info'}
          variant={variant as any}
          accessibilityLiveRegion={accessibilityLiveRegion}
          action={
            isClosable ? (
              <IconButton
                onPress={() => {
                  hideToast(id);
                }}
                icon={<CloseIcon size={themeProps._closeIcon} />}
              />
            ) : undefined
          }
          {...rest}
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
