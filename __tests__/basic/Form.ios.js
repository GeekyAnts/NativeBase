import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Form } from "./../../src/basic/Form";
import { Item } from "./../../src/basic/Item";
import { Label } from "./../../src/basic/Label";
import { Input } from "./../../src/basic/Input";
import { Icon } from "./../../src/basic/Icon";
import { Textarea } from "./../../src/basic/Textarea";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders Fixed Label Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item fixedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item fixedLabel last>
          <Label>Password</Label>
          <Input secureTextEntry />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Inline Label Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item inlineLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item inlineLabel last>
          <Label>Password</Label>
          <Input secureTextEntry />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Floating Label Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input secureTextEntry />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Placeholder Label Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item>
          <Input placeholder="Username" />
        </Item>
        <Item last>
          <Input placeholder="Password" secureTextEntry />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Stacked Label Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input secureTextEntry />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Regular Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item regular>
          <Input placeholder="Regular Textbox" />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Underline Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item>
          <Input placeholder="Underline Textbox" />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Rounded Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item rounded>
          <Input placeholder="Rounded Textbox" />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Icon Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item>
          <Icon active name="home" />
          <Input placeholder="Icon Textbox" />
        </Item>
        <Item>
          <Input placeholder="Icon Alignment in Textbox" />
          <Icon active name="swap" />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Success Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item success>
          <Input placeholder="Textbox with Success Input" />
          <Icon name="ios-checkmark-circle" />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Error Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item error>
          <Input placeholder="Textbox with Error Input" />
          <Icon name="ios-close-circle" />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Disabled Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Item disabled>
          <Input disabled placeholder="Disabled Textbox" />
          <Icon name="ios-information-circle" />
        </Item>
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders Textarea Input", () => {
  const tree = renderer
    .create(
      <Form>
        <Textarea rowSpan={5} bordered placeholder="Textarea" />
      </Form>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
