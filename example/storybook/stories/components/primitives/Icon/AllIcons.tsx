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
  SmallCloseIcon,
  HamburgerIcon,
  InfoIcon,
  InfoOutlineIcon,
  MinusIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  SearchIcon,
  WarningIcon,
  WarningTwoIcon,
  ThreeDotsIcon,
  WarningOutlineIcon,
  ShareIcon,
  PlayIcon,
  FavouriteIcon,
  DeleteIcon,
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
      icon: <AddIcon />,
      iconName: 'add',
    },
    {
      icon: <ArrowBackIcon />,
      iconName: 'arrow-back',
    },
    {
      icon: <ArrowForwardIcon />,
      iconName: 'arrow-forward',
    },
    {
      icon: <ArrowUpIcon />,
      iconName: 'arrow-up',
    },
    {
      icon: <ArrowDownIcon />,
      iconName: 'arrow-down',
    },
    {
      icon: <CheckIcon />,
      iconName: 'check',
    },
    {
      icon: <CheckCircleIcon />,
      iconName: 'check-circle',
    },
    {
      icon: <ChevronDownIcon />,
      iconName: 'chevron-down',
    },
    {
      icon: <ChevronLeftIcon />,
      iconName: 'chevron-left',
    },
    {
      icon: <ChevronRightIcon />,
      iconName: 'chevron-right',
    },
    {
      icon: <ChevronUpIcon />,
      iconName: 'chevron-up',
    },
    {
      icon: <CircleIcon />,
      iconName: 'circle',
    },
    {
      icon: <CloseIcon />,
      iconName: 'close',
    },
    {
      icon: <SmallCloseIcon />,
      iconName: 'small-close',
    },
    {
      icon: <HamburgerIcon />,
      iconName: 'menu',
    },
    {
      icon: <InfoIcon />,
      iconName: 'info',
    },
    {
      icon: <InfoOutlineIcon />,
      iconName: 'info-outline',
    },
    {
      icon: <MinusIcon />,
      iconName: 'minus',
    },
    {
      icon: <MoonIcon />,
      iconName: 'moon',
    },
    {
      icon: <QuestionIcon />,
      iconName: 'question',
    },
    {
      icon: <QuestionOutlineIcon />,
      iconName: 'question-outline',
    },
    {
      icon: <SearchIcon />,
      iconName: 'search',
    },
    {
      icon: <SunIcon />,
      iconName: 'sun',
    },
    {
      icon: <WarningIcon />,
      iconName: 'warning-1',
    },
    {
      icon: <WarningTwoIcon />,
      iconName: 'warning-2',
    },
    {
      icon: <WarningOutlineIcon />,
      iconName: 'warning-outline',
    },
    {
      icon: <ThreeDotsIcon />,
      iconName: 'three-dots',
    },
    {
      icon: <ShareIcon />,
      iconName: 'share',
    },
    {
      icon: <PlayIcon />,
      iconName: 'play',
    },
    {
      icon: <FavouriteIcon />,
      iconName: 'favourite',
    },
    {
      icon: <DeleteIcon />,
      iconName: 'delete',
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
