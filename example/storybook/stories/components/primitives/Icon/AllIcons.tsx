import React from 'react';
import {
  SimpleGrid,
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
} from 'native-base';

export const Example = () => {
  const icons = [
    <AddIcon />,
    <ArrowBackIcon />,
    <ArrowForwardIcon />,
    <ArrowUpIcon />,
    <ArrowDownIcon />,
    <CheckIcon />,
    <CheckCircleIcon />,
    <ChevronDownIcon />,
    <ChevronLeftIcon />,
    <ChevronRightIcon />,
    <ChevronUpIcon />,
    <CircleIcon />,
    <CloseIcon />,
    <SmallCloseIcon />,
    <HamburgerIcon />,
    <InfoIcon />,
    <InfoOutlineIcon />,
    <MinusIcon />,
    <MoonIcon />,
    <QuestionIcon />,
    <QuestionOutlineIcon />,
    <SearchIcon />,
    <SunIcon />,
    <WarningIcon />,
    <WarningTwoIcon />,
  ];
  return (
    // @ts-ignore
    <SimpleGrid columns={{ base: 4, md: 9 }} space={8}>
      {icons}
    </SimpleGrid>
  );
};
