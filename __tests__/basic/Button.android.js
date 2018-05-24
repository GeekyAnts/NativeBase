import { View } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./../../src/basic/Content";
// import { View } from "./../../src/basic/View";
import { Button } from "./../../src/basic/Button";
import { Text } from "./../../src/basic/Text";
import { Icon } from "./../../src/basic/Icon";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "android";
  return Platform;
});

it("renders regular button", () => {
  const tree = renderer
    .create(
      <Content>
        <Button light>
          <Text>Light</Text>
        </Button>
        <Button info>
          <Text>Info</Text>
        </Button>
        <Button primary>
          <Text>Primary</Text>
        </Button>
        <Button success>
          <Text>Success</Text>
        </Button>
        <Button warning>
          <Text>Warning</Text>
        </Button>
        <Button danger>
          <Text>Danger</Text>
        </Button>
        <Button dark>
          <Text>Dark</Text>
        </Button>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders outline button", () => {
  const tree = renderer
    .create(
      <Content>
        <Button bordered light>
          <Text>Light</Text>
        </Button>
        <Button bordered info>
          <Text>Info</Text>
        </Button>
        <Button bordered primary>
          <Text>Primary</Text>
        </Button>
        <Button bordered success>
          <Text>Success</Text>
        </Button>
        <Button bordered warning>
          <Text>Warning</Text>
        </Button>
        <Button bordered danger>
          <Text>Danger</Text>
        </Button>
        <Button bordered dark>
          <Text>Dark</Text>
        </Button>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it("renders rounded button", () => {
//   const tree = renderer
//     .create(
//       <Content>
//         <Button rounded light>
//           <Text>Light</Text>
//         </Button>
//         <Button rounded info>
//           <Text>Info</Text>
//         </Button>
//         <Button rounded primary>
//           <Text>Primary</Text>
//         </Button>
//         <Button rounded success>
//           <Text>Success</Text>
//         </Button>
//         <Button rounded warning>
//           <Text>Warning</Text>
//         </Button>
//         <Button rounded danger>
//           <Text>Danger</Text>
//         </Button>
//         <Button rounded dark>
//           <Text>Dark</Text>
//         </Button>
//       </Content>
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

it("renders block button", () => {
  const tree = renderer
    .create(
      <Content>
        <Button block light>
          <Text>Light</Text>
        </Button>
        <Button block info>
          <Text>Info</Text>
        </Button>
        <Button block primary>
          <Text>Primary</Text>
        </Button>
        <Button block success>
          <Text>Success</Text>
        </Button>
        <Button block warning>
          <Text>Warning</Text>
        </Button>
        <Button block danger>
          <Text>Danger</Text>
        </Button>
        <Button block dark>
          <Text>Dark</Text>
        </Button>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders full button", () => {
  const tree = renderer
    .create(
      <View>
        <Button full light>
          <Text>Light</Text>
        </Button>
        <Button full info>
          <Text>Info</Text>
        </Button>
        <Button full primary>
          <Text>Primary</Text>
        </Button>
        <Button full success>
          <Text>Success</Text>
        </Button>
        <Button full warning>
          <Text>Warning</Text>
        </Button>
        <Button full danger>
          <Text>Danger</Text>
        </Button>
        <Button full dark>
          <Text>Dark</Text>
        </Button>
      </View>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders custom size button", () => {
  const tree = renderer
    .create(
      <View>
        <Button small>
          <Text>Default Small</Text>
        </Button>
        <Button success>
          <Text>Success Default</Text>
        </Button>

        <Button large dark>
          <Text>Dark large</Text>
        </Button>
      </View>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders transparent button", () => {
  const tree = renderer
    .create(
      <Content>
        <Button transparent light>
          <Text>Light</Text>
        </Button>
        <Button transparent info>
          <Text>Info</Text>
        </Button>
        <Button transparent primary>
          <Text>Primary</Text>
        </Button>
        <Button transparent success>
          <Text>Success</Text>
        </Button>
        <Button transparent warning>
          <Text>Warning</Text>
        </Button>
        <Button transparent danger>
          <Text>Danger</Text>
        </Button>
        <Button transparent dark>
          <Text>Dark</Text>
        </Button>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders icon button", () => {
  const tree = renderer
    .create(
      <Content>
        <Button iconLeft light>
          <Icon active name="arrow-back" />
          <Text>Back</Text>
        </Button>
        <Button light iconRight>
          <Text>Next</Text>
          <Icon active name="arrow-forward" />
        </Button>
        <Button light>
          <Icon active name="arrow-down" />
        </Button>
        <Button light>
          <Icon active name="arrow-up" />
        </Button>
        <Button iconLeft>
          <Icon active name="home" />
          <Text>Home</Text>
        </Button>
        <Button iconLeft bordered>
          <Icon active name="briefcase" />
          <Text>Work</Text>
        </Button>
        <Button iconLeft success>
          <Icon active name="people" />
          <Text>People</Text>
        </Button>
        <Button iconLeft success bordered>
          <Icon active name="paw" />
          <Text>Animals</Text>
        </Button>
        <Button iconLeft danger>
          <Icon active name="close" />
          <Text>Trash</Text>
        </Button>
        <Button danger bordered>
          <Icon active name="trash" />
        </Button>
        <Button danger transparent>
          <Icon active name="trash" />
        </Button>
        <Button iconLeft warning>
          <Icon active name="warning" />
          <Text>Dont</Text>
        </Button>
        <Button warning bordered>
          <Icon active name="warning" />
        </Button>
        <Button iconLeft info>
          <Icon name="alert" />
          <Text>Help</Text>
        </Button>
        <Button info>
          <Icon name="alert" />
        </Button>
        <Button iconLeft dark>
          <Icon active name="cog" />
          <Text>Settings</Text>
        </Button>
        <Button dark transparent>
          <Icon active name="cog" />
        </Button>
        <Button iconLeft transparent>
          <Icon active name="beer" />
          <Text>Pub</Text>
        </Button>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders disabled button", () => {
  const tree = renderer
    .create(
      <Content>
        <Button disabled>
          <Text>Default</Text>
        </Button>
        <Button disabled bordered>
          <Text>Outline</Text>
        </Button>
        {/* <Button disabled rounded>
          <Text>Rounded</Text>
        </Button> */}
        <Button disabled large>
          <Text>Custom</Text>
        </Button>
        <Button disabled iconRight>
          <Text>Icon Button</Text>
          <Icon name="home" />
        </Button>
        <Button disabled block>
          <Text>Block</Text>
        </Button>

        <Button disabled full>
          <Text>Full</Text>
        </Button>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
