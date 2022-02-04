import React from 'react';
import {
  Button,
  Modal,
  VStack,
  HStack,
  Text,
  Radio,
  Center,
} from 'native-base';
import { useState } from 'react';

export const Example = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Sub Total</Text>
                <Text color="blueGray.400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tax</Text>
                <Text color="blueGray.400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total Amount</Text>
                <Text color="green.500">$337.61</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal2(true);
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Select Address</Modal.Header>
          <Modal.Body>
            <Radio.Group defaultValue="address1" name="address" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{ mt: '-1', ml: '2', fontSize: 'sm' }}
                  value="address1"
                >
                  4140 Parker Rd. Allentown, New Mexico 31134
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{ mt: '-1', ml: '2', fontSize: 'sm' }}
                  value="address2"
                >
                  6391 Elign St. Celina, Delaware 10299
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal3(true);
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Payment Options</Modal.Header>
          <Modal.Body>
            <Radio.Group name="payment" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{ mt: '-1', ml: '2', fontSize: 'sm' }}
                  value="payment1"
                >
                  Cash on delivery
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{ mt: '-1', ml: '2', fontSize: 'sm' }}
                  value="payment2"
                >
                  Credit/ Debit/ ATM Card
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{ mt: '-1', ml: '2', fontSize: 'sm' }}
                  value="payment3"
                >
                  UPI
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal(false);
                setShowModal2(false);
                setShowModal3(false);
              }}
            >
              Checkout
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
