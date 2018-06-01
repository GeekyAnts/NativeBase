import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Container } from "./../../src/basic/Container";
import { Header } from "./../../src/basic/Header";
import { Item } from "./../../src/basic/Item";
import { Icon } from "./../../src/basic/Icon";
import { Input } from "./../../src/basic/Input";
import { Button } from "./../../src/basic/Button";
import { Text } from "./../../src/basic/Text";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "android";
  return Platform;
});

it("renders searchbar", () => {
  const tree = renderer
    .create(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
