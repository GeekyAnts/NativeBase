import React from 'react';
import {
  Button,
  useToast,
  VStack,
  HStack,
  Text,
  Center,
  IconButton,
  CloseIcon,
  Alert,
} from 'native-base';

export const Example = () => {
  const toast = useToast();
  const ToastDetails = [
    {
      title: 'Account verified',
      status: 'success',
      description: 'Thanks for signing up with us.',
      isClosable: true,
    },
    {
      title: 'Something went wrong',
      status: 'error',
      description: 'Please create a support ticket from the support page',
    },
    {
      title: 'Network connection restored',
      status: 'info',
      description:
        'This is to inform you that your network connectivity is restored',
      isClosable: true,
    },
    {
      title: 'Invalid email address',
      status: 'warning',
      description: 'Please enter a valid email address',
    },
  ];

  const ToastAlert = ({
    id,
    status,
    variant,
    title,
    description,
    isClosable,
    ...rest
  }: any) => (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status ? status : 'info'}
      variant={variant as any}
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
              flexShrink={1}
              color="darkText"
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        <Text px="6" color="darkText">
          {description}
        </Text>
      </VStack>
    </Alert>
  );

  return (
    <Center>
      <VStack space={2}>
        {ToastDetails.map((item, index) => (
          <Button
            key={index}
            colorScheme={item.status}
            onPress={() =>
              toast.show({
                render: ({ id }) => {
                  return <ToastAlert id={id} {...item} />;
                },
              })
            }
          >
            {item.status}
          </Button>
        ))}
      </VStack>
    </Center>
  );
};
