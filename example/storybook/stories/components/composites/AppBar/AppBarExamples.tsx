import React from 'react';
import {
  AppBar,
  IconButton,
  Icon,
  Text,
  HStack,
  VStack,
  Button,
} from 'native-base';
import { TouchableOpacity } from 'react-native';

export default function Examples() {
  return (
    <VStack space={10} width="100%">
      <Material />
      <IOSLike />
      <Customized />
      <CustomizedWithBorder />
    </VStack>
  );
}

function Material() {
  return (
    <AppBar shadow={1}>
      <AppBar.Left>
        <LeftArrowIconButton />
      </AppBar.Left>

      <AppBar.Content>
        <VStack space={1}>
          <Text fontWeight="bold" fontSize="lg" isTruncated color="white">
            Title
          </Text>
          <Text isTruncated color="white">
            Subtitle
          </Text>
        </VStack>
      </AppBar.Content>

      <AppBar.Right space={2}>
        <HeartIcon />
        <SearchIcon />
        <MoreIcon />
      </AppBar.Right>
    </AppBar>
  );
}

function IOSLike() {
  return (
    <AppBar bg="white" shadow={2}>
      <AppBar.Left>
        <TouchableOpacity>
          <HStack alignItems="center" space={1}>
            <Icon
              name="angle-left"
              type="FontAwesome"
              size={10}
              color="blue.500"
            />
            <Text fontWeight={'bold'} color="blue.500" fontSize="md">
              Back
            </Text>
          </HStack>
        </TouchableOpacity>
      </AppBar.Left>

      <AppBar.Content justifyContent="center">
        <Text isTruncated fontWeight="bold" fontSize={'lg'} color="gray.700">
          Header
        </Text>
      </AppBar.Content>

      <AppBar.Right>
        <Button onPress={() => {}} colorScheme="blue" variant="ghost">
          <Text fontWeight={'bold'} color="blue.500" fontSize="md">
            Cancel
          </Text>
        </Button>
      </AppBar.Right>
    </AppBar>
  );
}

function Customized() {
  return (
    <AppBar colorScheme="dark" shadow={1}>
      <AppBar.Left>
        <IconButton
          icon={<Icon name="angle-left" type="FontAwesome" size={10} />}
        />
      </AppBar.Left>
      <AppBar.Content>
        <Text isTruncated fontWeight="bold" fontSize={22}>
          Library
        </Text>
      </AppBar.Content>
      <AppBar.Right>
        <IconButton
          icon={<Icon name="folder-music" type="Entypo" size={8} />}
        />
      </AppBar.Right>
    </AppBar>
  );
}

function CustomizedWithBorder() {
  return (
    <AppBar colorScheme="teal" shadow={3} px={4} space={3}>
      <AppBar.Left>
        <IconButton icon={<Icon name="menu" size={6} />} />
      </AppBar.Left>
      <AppBar.Content>
        <Text isTruncated fontWeight="bold" fontSize={20}>
          Home
        </Text>
      </AppBar.Content>
      <AppBar.Right space={4}>
        <IconButton icon={<Icon name="search1" type="AntDesign" size={6} />} />
        <IconButton
          icon={<Icon name="shopping-bag" type="Entypo" size={6} />}
        />
        <IconButton
          icon={<Icon name="bookmark-o" type="FontAwesome" size={6} />}
        />
      </AppBar.Right>
    </AppBar>
  );
}

const LeftArrowIconButton = () => {
  return (
    <IconButton
      icon={
        <Icon
          name="arrow-left"
          type="MaterialCommunityIcons"
          size={8}
          color="white"
        />
      }
    />
  );
};

const HeartIcon = () => {
  return (
    <IconButton
      icon={
        <Icon
          name="heart"
          type="MaterialCommunityIcons"
          size={6}
          color="white"
        />
      }
    />
  );
};
const SearchIcon = () => {
  return (
    <IconButton
      icon={<Icon name="search1" type="AntDesign" size={6} color="white" />}
    />
  );
};
const MoreIcon = () => {
  return <IconButton icon={<Icon name="more-vert" size={6} color="white" />} />;
};
