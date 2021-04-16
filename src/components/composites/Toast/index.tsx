import { OverlayContainer } from '@react-native-aria/overlays';
import { VStack, Text, Alert } from 'native-base';
import React, { createContext, useEffect, useState } from 'react';

const POSITIONS = {
  'bottom': {
    bottom: 10,
    left: 0,
    right: 0,
  },
  'top': {
    top: 10,
    left: 0,
    right: 0,
  },
  'left': {
    top: 0,
    bottom: 0,
    left: 0,
  },
  'right': {
    top: 0,
    bottom: 0,
    right: 0,
  },
  'top-right': {
    top: 10,
    right: 0,
  },
  'top-left': {
    top: 0,
    left: 0,
  },
  'bottom-left': {
    bottom: 0,
    left: 0,
  },
  'bottom-right': {
    bottom: 0,
    right: 0,
  },
};

type IToast = {
  id: number;
  component: any;
  config?: any;
};

type IToastInfo = {
  [key in keyof typeof POSITIONS]?: Array<IToast>;
};

type IRenderFunction = () => JSX.Element;

type IArg =
  | string
  | {
      title: string;
      description?: string;
      status?: string;
      duration?: number;
      isClosable?: boolean;
    }
  | IRenderFunction;

type IToastContext = {
  toastInfo: IToastInfo;
  setToastInfo: any;
  setToast: (arg1: IArg, position?: keyof typeof POSITIONS) => void;
};

export const ToastContext = createContext<IToastContext>({
  toastInfo: {},
  setToastInfo: () => {
    console.log('Toast being called');
  },
  setToast: () => {},
});

export const CustomToast = () => {
  const { toastInfo } = React.useContext(ToastContext);

  const getPositions = () => {
    return Object.keys(toastInfo);
  };

  return (
    <OverlayContainer>
      {getPositions().map((position: string) => {
        if (Object.keys(POSITIONS).includes(position))
          return (
            <VStack
              margin="auto"
              // @ts-ignore
              {...POSITIONS[position]}
              position="absolute"
              space={2}
              alignItems="center"
              justifyContent="center"
            >
              {
                // @ts-ignore
                toastInfo[position].map((toast: IToast) => toast.component)
              }
            </VStack>
          );
        else return null;
      })}
    </OverlayContainer>
  );
};

export const ToastProvider = ({ children }: { children: any }) => {
  const [toastInfo, setToastInfo] = useState<IToastInfo>({});
  const [toastIndex, setToastIndex] = useState(0);

  useEffect(() => {
    return function cleanup() {
      setToastInfo({});
    };
  }, []);

  const removeToast = (id: number, toastInfo: IToastInfo) => {
    console.log('removed id &*&', id, Object.values(toastInfo));
    for (let toastPosition of Object.keys(toastInfo)) {
      // @ts-ignore
      let positionArray: Array<IToast> = toastInfo[toastPosition];

      let newPositionArray = positionArray.slice(
        positionArray.findIndex((toastData) => toastData.id === id),
        1
      );

      let temp: any = {};
      temp[toastPosition] = newPositionArray;

      let newToastInfo = { ...toastInfo, ...temp };
      setToastInfo(newToastInfo);
    }

    console.log('not find &*&');
    return null;
  };

  const setToast = (
    arg1: IArg,
    position: keyof typeof POSITIONS = 'bottom'
  ) => {
    console.log('Was called &*&');
    let positionToastArray = toastInfo[position];
    if (!positionToastArray) positionToastArray = [];

    let component = null;

    if (typeof arg1 === 'string') {
      component = (
        <Text bg="black" color="white" p={2} rounded={'md'}>
          {arg1}
        </Text>
      );
    } else if (typeof arg1 === 'object' && arg1.title) {
      component = (
        <Alert status={arg1.status ?? 'info'}>
          <Alert.Icon />
          <Alert.Title>{arg1.title}</Alert.Title>
          {arg1.description ? (
            <Alert.Description>{arg1.description}</Alert.Description>
          ) : null}
        </Alert>
      );
    } else if (typeof arg1 === 'function') {
      component = arg1();
    } else {
      return;
    }

    let id = toastIndex;
    toastInfo[position] = [...positionToastArray, { component, id }];
    setToastInfo({ ...toastInfo });
    setToastIndex(toastIndex + 1);

    // setTimeout(function () {
    //   console.log('removed id &*&', id, Object.values(toastInfo));
    //   // for (let toastPosition of Object.keys(toastInfo)) {
    //   //   // @ts-ignore
    //   //   let positionArray: Array<IToast> = toastInfo[toastPosition];

    //   //   let newPositionArray = positionArray.slice(
    //   //     positionArray.findIndex((toastData) => toastData.id === id),
    //   //     1
    //   //   );

    //   //   let temp: any = {};
    //   //   temp[toastPosition] = newPositionArray;

    //   //   let newToastInfo = { ...toastInfo, ...temp };
    //   //   setToastInfo(newToastInfo);
    //   // }

    //   // console.log('not find &*&');
    //   // return null;
    // }, 3000);
    return id;
  };

  return (
    <ToastContext.Provider value={{ toastInfo, setToastInfo, setToast }}>
      {children}
      <CustomToast />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { setToast } = React.useContext(ToastContext);

  return setToast;
};
