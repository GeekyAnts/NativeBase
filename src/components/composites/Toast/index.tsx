import { OverlayContainer } from '@react-native-aria/overlays';
import { VStack, Box, Alert, Icon } from 'native-base';
import React, { createContext, ReactNode, useState } from 'react';
import { Animated } from 'react-native';
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

const transitionConfig = {
  'bottom': {
    outputRange: [20, 0],
  },
  'top': {
    outputRange: [-20, 0],
  },
  'top-right': {
    outputRange: [-20, 0],
  },
  'top-left': {
    outputRange: [-20, 0],
  },
  'bottom-left': {
    outputRange: [20, 0],
  },
  'bottom-right': {
    outputRange: [20, 0],
  },
};

const Transition = ({
  children,
  translateOutputRange,
  onTransitionComplete,
}: any) => {
  const animateValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animateValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onTransitionComplete && onTransitionComplete('entered');
    });
  }, []);

  return (
    <Animated.View
      style={{
        opacity: animateValue,
        transform: [
          {
            translateY: animateValue.interpolate({
              inputRange: [0, 1],
              outputRange: translateOutputRange,
            }),
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
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
  variant?: string;
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
  removeAll: () => void;
  isActive: (id: any) => boolean;
};

export const ToastContext = createContext<IToastContext>({
  toastInfo: {},
  setToastInfo: () => {},
  setToast: () => {},
  removeToast: (id: any) => {},
  removeAll: () => {},
  isActive: (id: any) => false,
});

export const CustomToast = () => {
  const { toastInfo } = React.useContext(ToastContext);

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
                    translateOutputRange={
                      //@ts-ignore
                      transitionConfig[position].outputRange
                    }
                  >
                    <React.Fragment key={toast.id}>
                      {toast.component}
                    </React.Fragment>
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
  let toastIndex = React.useRef(0);

  const removeAll = () => {
    setToastInfo({});
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
      status,
      id = toastIndex.current++,
      description,
      isClosable = true,
      duration = 5000,
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
          action={
            isClosable ? (
              <IconButton
                onPress={() => {
                  removeToast(id);
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
    } else {
      component = (
        <Box p={2} rounded="md" bg="gray.800" _text={{ color: 'gray.50' }}>
          {title}
        </Box>
      );
    }

    toastInfo[position] = [
      ...positionToastArray,
      { component, id, config: props },
    ];

    setToastInfo({ ...toastInfo });

    setTimeout(function () {
      removeToast(id);
    }, duration);

    return id;
  };

  return (
    <ToastContext.Provider
      value={{
        toastInfo,
        setToastInfo,
        setToast,
        removeToast,
        removeAll,
        isActive,
      }}
    >
      {children}
      <CustomToast />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { removeToast, setToast, removeAll, isActive } = React.useContext(
    ToastContext
  );

  const toast = {
    show: setToast,
    close: removeToast,
    closeAll: removeAll,
    isActive,
  };

  return toast;
};
