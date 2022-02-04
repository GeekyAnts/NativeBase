import { OverlayContainer } from '@react-native-aria/overlays';
import { PresenceTransition } from '../Transitions';
import VStack from '../../primitives/Stack/VStack';
import { Alert } from '../../composites/Alert';
import React, {
  createContext,
  MutableRefObject,
  useState,
  useMemo,
} from 'react';
import {
  AccessibilityInfo,
  Easing,
  Platform,
  SafeAreaView,
} from 'react-native';
import IconButton from '../IconButton';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { CloseIcon } from '../../primitives/Icon/Icons';
import type { IToastContext, IToastInfo, IToast, IToastProps } from './types';
import Text from '../../primitives/Text';
import HStack from '../../primitives/Stack/HStack';
import { useColorMode } from '../../../core/color-mode/hooks';

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
              pointerEvents="box-none"
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
    {
      [key in string]: boolean;
    }
  >({});

  const [themeProps] = useState(usePropsResolution('Toast', {}));

  const { colorMode } = useColorMode();
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

  const getTextColor = React.useCallback(
    (
      variant:
        | 'solid'
        | 'left-accent'
        | 'top-accent'
        | 'outline'
        | 'subtle'
        | 'outline-light'
        | any
    ): any => {
      switch (variant) {
        case 'left-accent':
        case 'top-accent':
        case 'subtle':
          return 'coolGray.800';
        case 'solid':
          return 'warmGray.50';
        case 'outline':
        case 'outline-light':
          return colorMode === 'light' ? 'coolGray.800' : 'warmGray.50';
        default:
          return 'black';
      }
    },
    [colorMode]
  );

  const setToast = React.useCallback(
    (props: IToastProps): number => {
      // console.log("in settoast");
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
        component = render({ id });
      } else if (!status && !variant) {
        component = (
          <VStack
            space={title && description ? 1 : 0}
            {...themeProps}
            {...rest}
          >
            <Box _text={themeProps._title}>{title}</Box>
            {description && (
              <Box _text={themeProps._description}>{description}</Box>
            )}
          </VStack>
        );
      } else if (status || variant) {
        component = (
          <Alert
            maxWidth="100%"
            alignSelf="center"
            flexDirection="row"
            status={status ?? 'info'}
            variant={variant as any}
            accessibilityLiveRegion={accessibilityLiveRegion}
            {...rest}
          >
            <VStack space={1} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color={getTextColor(variant ?? 'subtle')}
                    flexShrink={1}
                  >
                    {title}
                  </Text>
                </HStack>
                {isClosable ? (
                  <IconButton
                    variant="unstyled"
                    icon={
                      <CloseIcon
                        size="3"
                        color={getTextColor(variant ?? 'subtle')}
                      />
                    }
                    onPress={() => hideToast(id)}
                  />
                ) : null}
              </HStack>
              <Box
                px="6"
                // @ts-ignore
                _text={{
                  color: getTextColor(variant ?? 'subtle'),
                }}
              >
                {description}
              </Box>
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
    },
    [getTextColor, themeProps, toastInfo, visibleToasts, hideToast]
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
      <CustomToast />
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
