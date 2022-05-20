import {
  NativeBaseProvider,
  Button,
  Text,
  Box,
  Checkbox,
  Center,
  Modal,
  FormControl,
  Input,
  Pressable,
} from 'native-base';
import React, {
  forwardRef,
  useEffect,
  useState,
  memo,
  useCallback,
} from 'react';
import { View, Button as RNButton } from 'react-native';
import { View as DripsyView } from 'dripsy';
import { Pressable as DripsyButton } from 'dripsy';
import { Text as DripsyText } from 'dripsy';

const Example = () => {
  const [showModal, setShowModal] = useState(false);
  React.useEffect(() => {
    console.endTimeKey('mountmodal', '>>>>>>>>>>>>>>>>>> modal');
  });
  return (
    <Center mt={20}>
      <Button
        onPress={() => {
          console.startTimeKey('mountmodal');
          setShowModal(true);
        }}
        w="100"
        h="100"
      >
        Button
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

const MyButton = memo(
  forwardRef((props: any, ref: any) => {
    return (
      <View
        style={{
          backgroundColor: props.color.slice(0, -4),
          width: 100,
          height: 100,
        }}
      ></View>
    );
    return (
      <RNButton
        color={props.color.slice(0, -4)}
        style={{ backgroundColor: 'red', width: 100, height: 100 }}
        title="Button"
      ></RNButton>
    );
  })
);
export const NativeBaseScreen = () => {
  const [groupValues, setGroupValues] = React.useState([]);
  console.log('NativeBaseScreen', groupValues);
  console.startTimeKey('Mounted');
  const [state, setState] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    console.endTimeKey('Mounted', 'Mounted');

    // setTimeout(() => {
    //   setState(true);
    // }, 3000);
    // });
  }, []);

  // return <MyButton color={state} />;
  // return (
  //   <RNButton
  //     color={state}
  //     style={{ backgroundColor: "red", width: 100, height: 100 }}
  //     title="Button"
  //   ></RNButton>
  // );

  // return <Example />;

  // return (
  //   <Box backgroundColor={"red.200"} width="100" height="100">
  //     <Box backgroundColor={"red.200"} width="100" height="100">
  //       <Box backgroundColor={"red.200"} width="100" height="100">
  //         <Box backgroundColor={"red.200"} width="100" height="100">
  //           <Box backgroundColor={"red.200"} width="100" height="100">
  //             <Box backgroundColor={"red.200"} width="100" height="100">
  //               <Box backgroundColor={state} width="100" height="100">
  //                 hello
  //               </Box>
  //             </Box>
  //           </Box>
  //         </Box>
  //       </Box>
  //     </Box>
  //   </Box>
  // );

  // return <Example />;

  const handlePress = useCallback(() => {
    setTimeout(() => {
      console.log('set');
      setState(!state);
    }, 0);
  }, [state]);

  // return (
  //   <DripsyView
  //     sx={{
  //       height: [100],
  //       width: [100],
  //       backgroundColor: "red",
  //       marginX: 10,
  //     }}
  //   />
  // );

  // return <Button>hello</Button>;

  return (
    <>
      {/* <Box></Box> */}
      {/* <DripsyView style={{ backgroundColor: "red", width: 100, height: 100 }} /> */}
      <RNButton
        onPress={handlePress}
        style={{
          marginTop: 10,
          backgroundColor: 'red',
          width: 100,
          height: 100,
        }}
        title="My Button"
      >
        Hello
      </RNButton>

      {/* {state && <Box background={"red.200"} w="100" h="100" />} */}
      {state && (
        <>
          <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
          {/* <Pressable/> */}
          <View>
            {new Array(1).fill(' ').map((_, index) => (
              <Pressable
                bg="red.400"
                // safeAreaX
                p={2}
                mt={2}
                borderWidth={1}
                borderRadius={1}
                pt={1}
                pb={1}
                pr={1}
                pl={1}
                // borderBottomColor="emerald.100"
                // bg="red.200"
                // p={index}
                // style={{ width: 100, height: 100 }}
                // _text={{
                //   bg: "blue.200",
                // }}
                // _dark={{
                //   bg: "red.100",
                // }}
                // variant="default"
                style={{ width: 100, height: 100 }}
              >
                <Text>Hello</Text>
              </Pressable>
            ))}
          </View>

          <View>
            {new Array(1).fill(' ').map((_, index) => (
              <DripsyButton
                sx={{ bg: '$primary', p: index }}
                style={{ backgroundColor: 'red', width: 100, height: 100 }}
              >
                <DripsyText>hello</DripsyText>
              </DripsyButton>
            ))}
          </View>
          {/* <DripsyView
            sx={{
              height: [100],
              width: [100],
              backgroundColor: "red",
              marginX: 10,
            }}
          /> */}
        </>
      )}
    </>
  );
};
