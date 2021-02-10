import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Center,
  Input,
} from 'native-base';
import { useOverlayTriggerState } from '@react-stately/overlays';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayProvider,
  OverlayContainer,
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { useButton } from '@react-aria/button';

// export default function () {
//   const [modalVisible, setModalVisible] = React.useState(false);
//   return (
//     <>
//       <Modal
//         isOpen={modalVisible}
//         onClose={setModalVisible}
//         overlayVisible={true}
//       >
//         <ModalContent>
//           <ModalCloseButton />
//           <ModalHeader fontSize="4xl" fontWeight="bold">
//             Hello World
//           </ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
//             cupiditate expedita, ipsa corporis officia totam similique delectus!
//             Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
//             <Input mt={4} placeholder="Lorem ipsum dolor sit" />
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" mr={1}>
//               Done
//             </Button>
//             <Button
//               colorScheme="secondary"
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               Cancel
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//       <Center>
//         <Button
//           onPress={() => {
//             setModalVisible(!modalVisible);
//           }}
//         >
//           Open Modal
//         </Button>
//       </Center>
//     </>
//   );
// }
export default function () {
  let state = useOverlayTriggerState({});
  let openButtonRef = React.useRef();
  let closeButtonRef = React.useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  let { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <Button onPress={() => setModalVisible(true)}>Open Dialogg</Button>

      {/* <OverlayContainer> */}
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        overlayVisible={true}
      >
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontSize="4xl" fontWeight="bold">
            Hello World
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
            cupiditate expedita, ipsa corporis officia totam similique delectus!
            Debitis esse, ea blanditiis iste enim iure at odit fugiat autem.
            <Input mt={4} placeholder="Lorem ipsum dolor sit" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={1}>
              Done
            </Button>
            <Button
              colorScheme="secondary"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* </OverlayContainer> */}
    </>
  );
}
