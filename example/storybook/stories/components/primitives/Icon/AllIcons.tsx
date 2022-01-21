import React from 'react';
import {
  Box,
  Text,
  MoonIcon,
  SunIcon,
  CheckIcon,
  CircleIcon,
  ArrowBackIcon,
  AddIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  HamburgerIcon,
  InfoIcon,
  InfoOutlineIcon,
  MinusIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  SearchIcon,
  WarningIcon,
  WarningTwoIcon,
  VStack,
  FlatList,
  useBreakpointValue,
} from 'native-base';
export const Example = () => {
  const cols = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 8,
  });
  const icons = [
    {
      icon: <AddIcon size="4" />,
      iconName: 'add',
    },
    {
      icon: <ArrowBackIcon size="4" />,
      iconName: 'arrow-back',
    },
    {
      icon: <ArrowForwardIcon size="4" />,
      iconName: 'arrow-forward',
    },
    {
      icon: <ArrowUpIcon size="4" />,
      iconName: 'arrow-up',
    },
    {
      icon: <ArrowDownIcon size="4" />,
      iconName: 'arrow-down',
    },
    {
      icon: <CheckIcon size="4" />,
      iconName: 'check',
    },
    {
      icon: <CheckCircleIcon size="4" />,
      iconName: 'check-circle',
    },
    {
      icon: <ChevronDownIcon size="4" />,
      iconName: 'chevron-down',
    },
    {
      icon: <ChevronLeftIcon size="4" />,
      iconName: 'chevron-left',
    },
    {
      icon: <ChevronRightIcon size="4" />,
      iconName: 'chevron-right',
    },
    {
      icon: <ChevronUpIcon size="4" />,
      iconName: 'chevron-up',
    },
    {
      icon: <CircleIcon size="4" />,
      iconName: 'circle',
    },
    {
      icon: <CloseIcon size="4" />,
      iconName: 'close',
    },
    {
      icon: <HamburgerIcon size="4" />,
      iconName: 'menu',
    },
    {
      icon: <InfoIcon size="4" />,
      iconName: 'info',
    },
    {
      icon: <InfoOutlineIcon size="4" />,
      iconName: 'info-outline',
    },
    {
      icon: <MinusIcon size="4" />,
      iconName: 'minus',
    },
    {
      icon: <MoonIcon size="4" />,
      iconName: 'moon',
    },
    {
      icon: <QuestionIcon size="4" />,
      iconName: 'question',
    },
    {
      icon: <QuestionOutlineIcon size="4" />,
      iconName: 'question-outline',
    },
    {
      icon: <SearchIcon size="4" />,
      iconName: 'search',
    },
    {
      icon: <SunIcon size="4" />,
      iconName: 'sun',
    },
    {
      icon: <WarningIcon size="4" />,
      iconName: 'warning-1',
    },
    {
      icon: <WarningTwoIcon size="4" />,
      iconName: 'warning-2',
    },
  ];
  return (
    <Box w="100%">
      <FlatList
        data={icons}
        renderItem={({ item }) => (
          <VStack
            py="2"
            flex={1}
            space={2}
            my={3}
            mx={2}
            boxSize="76"
            alignItems="center"
          >
            <Box _text={{ textAlign: 'center' }}>{item.icon}</Box>
            <Text textAlign="center">{item.iconName}</Text>
          </VStack>
        )}
        keyExtractor={(item) => item.iconName}
        numColumns={cols}
      />
    </Box>
  );
};
