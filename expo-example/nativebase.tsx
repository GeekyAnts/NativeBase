import {
  NativeBaseProvider,
  Button,
  Text,
  Box,
  Checkbox,
  Center,
  Badge,
  Modal as NBModal,
  FormControl,
  Input,
  View,
  Pressable,
} from 'native-base';
import React, {
  forwardRef,
  useEffect,
  useState,
  memo,
  useCallback,
} from 'react';
import {
  View as RNView,
  Button as RNButton,
  Modal,
  Pressable as RNPressable,
  Text as RNText,
} from 'react-native';
import { View as DripsyView } from 'dripsy';
import { Pressable as DripsyButton } from 'dripsy';
import { Text as DripsyText } from 'dripsy';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const Example = () => {
  const [showModal, setShowModal] = useState(false);
  // React.useEffect(() => {
  //   console.endTimeKey('mountmodal', '>>>>>>>>>>>>>>>>>> modal');
  // });
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: 100 }}>
      {/* <Box mt={100}>Box</Box> */}
      {/* <Button
        onPress={() => {
          // console.startTimeKey('mountmodal');
          // setShowModal(true);
          setModalVisible(!modalVisible);
        }}
      >
        Button
      </Button> */}

      <Button
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setShowModal(true);
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Button>

      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>

            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* <NBModal
        // animationType="slide"
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <NBModal.Content h="800">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>

              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </NBModal.Content>
      </NBModal> */}

      {/* <NBModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <NBModal.Content maxWidth="400px">
          <NBModal.CloseButton />
          <NBModal.Header>Contact Us</NBModal.Header>
          <NBModal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </NBModal.Body>
          <NBModal.Footer>
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
          </NBModal.Footer>
        </NBModal.Content>
      </NBModal> */}
    </View>
  );
};

// const MyButton = memo(
//   forwardRef((props: any, ref: any) => {
//     return (
//       <View
//         style={{
//           backgroundColor: props.color.slice(0, -4),
//           width: 100,
//           height: 100,
//         }}
//       ></View>
//     );
//     return (
//       <RNButton
//         color={props.color.slice(0, -4)}
//         style={{ backgroundColor: 'red', width: 100, height: 100 }}
//         title="Button"
//       ></RNButton>
//     );
//   })
// );
export const NativeBaseScreen = () => {
  // const [groupValues, setGroupValues] = React.useState([]);
  // console.log('NativeBaseScreen', groupValues);
  // console.startTimeKey('Mounted');
  const [state, setState] = useState(false);
  // useEffect(() => {
  //   // setTimeout(() => {
  //   console.endTimeKey('Mounted', 'Mounted');
  //   // setTimeout(() => {
  //   //   setState(true);
  //   // }, 3000);
  //   // });
  // }, []);
  // return <MyButton color={state} />;
  // return (
  //   <RNButton
  //     color={state}
  //     style={{ backgroundColor: "red", width: 100, height: 100 }}
  //     title="Button"
  //   ></RNButton>
  // );
  return <Example />;
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
  // return <Example />;
  return (
    <>
      <RNView style={{ marginBottom: 100 }}></RNView>
      {/* <DripsyView style={{ backgroundColor: "red", width: 100, height: 100 }} /> */}
      <RNButton
        onPress={handlePress}
        // style={{
        //   marginTop: 100,
        //   backgroundColor: 'red',
        //   width: 100,
        //   height: 100,
        // }}
        title="My Button 222"
      >
        Hello
      </RNButton>
      <Text
        style={{
          color: 'red',
        }}
      >
        Hide Modal 222
      </Text>

      {/* {state && <Box background={"red.200"} w="100" h="100" />} */}
      {state && (
        <>
          {/* <View style={{ backgroundColor: 'red', width: 100, height: 100 }} /> */}
          {/* <Pressable/> */}
          <RNView>
            {new Array(100).fill('100').map((_, index) => (
              // <Badge size="sm">NEW FEATURE</Badge> // <Checkbox
              //   value="test"
              //   accessibilityLabel="This is a dummy checkbox"
              // />
              <Text>Hide Modal</Text>

              // <Text

              // _hover={{
              //   height: 20,
              // }}
              // variant={'outline'}
              // _text={{
              //   color: 'red.500',
              // }}
              // bg="amber.400"
              // _hover={{ bg: 'red.700' }}
              // bg="blue.400"
              // safeAreaX
              // _hover={{
              //   bg: 'green.500',
              // }}
              // p={2}
              // mt={2}
              // borderWidth={1}
              // borderRadius={1}
              // pt={1}
              // pb={1}
              // pr={1}
              // pl={1}
              // borderBottomColor="emerald.100"
              // bg="red.200"
              // p={index}
              // style={{ width: 100, height: 100 }}
              // _text={{
              //   bg: 'blue.200',
              // }}
              // _dark={{
              //   bg: 'red.100',
              // }}
              // variant="default"
              // style={{ width: 100, height: 100 }}
              // bg="red.300"
              // h="100"
              // w="100"
              // >
              //   hello
              // </Text>
            ))}
          </RNView>
          <RNView>
            {new Array(100).fill(' ').map((_, index) => (
              // <DripsyText
              //   sx={{ bg: '$primary', p: index }}
              //   style={{ backgroundColor: 'red', width: 100, height: 100 }}
              // >
              <DripsyText>hello dripsy</DripsyText>
              // </DripsyView>
            ))}
          </RNView>
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
