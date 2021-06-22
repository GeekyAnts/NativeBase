// import React from 'react';
// import { Button, Box } from '../../primitives';
// import { FabContext } from './context';
// import type { IFabItemProps } from './props';
// import { Animated } from 'react-native';
// import { omitUndefined } from '../../../theme/tools/utils';

// const FabItem = ({ children, ...props }: IFabItemProps) => {
//   const slideAnim = React.useRef(new Animated.Value(0)).current;
//   const { onPress, index = 0, ...newProps } = omitUndefined(props);
//   const { isOpen, onToggle, slide }: any = React.useContext(FabContext);
//   const [size, setSize] = React.useState(40);
//   const slideStyle = {
//     down: 'top',
//     up: 'bottom',
//     right: 'left',
//     left: 'right',
//   };

//   const provideSize = (layoutSize: any) => {
//     setSize(layoutSize.width + 10);
//   };

//   const pressHandler = () => {
//     onToggle();
//     onPress && onPress();
//   };

//   const slideIn = () => {
//     Animated.timing(slideAnim, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   };

//   let animToValue = index * size;
//   animToValue =
//     slide === 'left' || slide === 'up' ? animToValue * -1 : animToValue;
//   const slideOut = () => {
//     Animated.timing(slideAnim, {
//       toValue: animToValue,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   };

//   isOpen ? slideOut() : slideIn();
//   const animatioStyle = {
//     top: { transform: [{ translateY: slideAnim }] },
//     right: { transform: [{ translateX: slideAnim }] },
//     bottom: { transform: [{ translateY: slideAnim }] },
//     left: { transform: [{ translateX: slideAnim }] },
//   };

//   return (
//     // @ts-ignore
//     <Animated.View style={animatioStyle[slideStyle[slide]]}>
//       <Box
//         position="absolute"
//         top={0}
//         right={0}
//         onLayout={(e) => provideSize(e.nativeEvent.layout)}
//         zIndex={9999 - index}
//       >
//         <Button
//           variant="unstyled"
//           bg="default.200"
//           borderRadius="full"
//           justifyContent="center"
//           alignItems="center"
//           {...newProps}
//           onPress={pressHandler}
//           p={1}
//         >
//           {children}
//         </Button>
//       </Box>
//     </Animated.View>
//   );
// };

// export default FabItem;
