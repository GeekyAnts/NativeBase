import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./../../src/basic/Content";
import { DatePicker } from "./../../src/basic/DatePicker";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders with placeholder", () => {
  let tree = renderer
    .create(
      <Content>
        <DatePicker
          defaultDate={new Date(2018, 1, 1)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2019, 1, 1)}
          locale={"en"}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText={"Select Date"}
        />
      </Content>
    );

  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders with default formatted chosen date", () => {
  // Default format is D/M/YYYY
  let tree = renderer
    .create(
      <Content>
        <DatePicker
          defaultDate={new Date(2018, 1, 1)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2019, 1, 1)}
          locale={"en"}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText={"Select Date"}
        />
      </Content>
    );

  const picker = tree.root.findByType(DatePicker);
  picker.instance.setDate(new Date(2018, 1, 2));

  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders with custom formatted chosen date", () => {
  // Custom format is YYYY-M-D
  let customDateFormatter = date => [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ].join('-')

  let tree = renderer
    .create(
      <Content>
        <DatePicker
          defaultDate={new Date(2018, 1, 1)}
          formatChosenDate={customDateFormatter}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2019, 1, 1)}
          locale={"en"}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText={"Select Date"}
        />
      </Content>
    );

  const picker = tree.root.findByType(DatePicker);
  picker.instance.setDate(new Date(2018, 1, 2));

  expect(tree.toJSON()).toMatchSnapshot();
});
