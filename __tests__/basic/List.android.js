import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { List } from "./../../src/basic/List";
import { ListItem } from "./../../src/basic/ListItem";
import { Left } from "./../../src/basic/Left";
import { Body } from "./../../src/basic/Body";
import { Right } from "./../../src/basic/Right";
import { Icon } from "./../../src/basic/Icon";
import { Text } from "./../../src/basic/Text";
import { Button } from "./../../src/basic/Button";
import { Switch } from "./../../src/basic/Switch";
import { Radio } from "./../../src/basic/Radio";
import { Badge } from "./../../src/basic/Badge";
import { Thumbnail } from "./../../src/basic/Thumbnail";
import { Separator } from "./../../src/basic/Separator";

// Note: test renderer must be required after react-native.

const pratik = require("../assets/pratik.png");
const sanket = require("../assets/sanket.png");

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "android";
  return Platform;
});

it("renders Basic List", () => {
  const datas = [
    "Simon Mignolet",
    "Nathaniel Clyne",
    "Dejan Lovren",
    "Mama Sakho",
    "Alberto Moreno",
    "Emre Can",
    "Joe Allen",
    "Phil Coutinho"
  ];
  const tree = renderer
    .create(
      <List
        dataArray={datas}
        renderRow={data => (
          <ListItem>
            <Left>
              <Text>{data}</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        )}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem selected", () => {
  const tree = renderer
    .create(
      <List>
        <ListItem selected>
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem>
          <Text>Urbino Cendre</Text>
        </ListItem>
        <ListItem>
          <Text>Lee Allen</Text>
        </ListItem>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem itemDivider", () => {
  const tree = renderer
    .create(
      <List>
        <ListItem itemDivider>
          <Text>A</Text>
        </ListItem>
        <ListItem>
          <Text>Aaron Bennet</Text>
        </ListItem>
        <ListItem>
          <Text>Ali Connors</Text>
        </ListItem>
        <ListItem last>
          <Text>Angana Ghosh</Text>
        </ListItem>

        <ListItem itemDivider>
          <Text>B</Text>
        </ListItem>
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
        <ListItem>
          <Text>Brian Swetland</Text>
        </ListItem>
        <ListItem last>
          <Text>Brittany Kelso</Text>
        </ListItem>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem itemHeader", () => {
  const tree = renderer
    .create(
      <List>
        <ListItem itemHeader first>
          <Text>COMEDY</Text>
        </ListItem>
        <ListItem>
          <Text>Hangover</Text>
        </ListItem>
        <ListItem>
          <Text>Horrible Bosses</Text>
        </ListItem>
        <ListItem last>
          <Text>Cop Out</Text>
        </ListItem>

        <ListItem itemHeader>
          <Text>HORROR</Text>
        </ListItem>
        <ListItem>
          <Text>The Evil Dead</Text>
        </ListItem>
        <ListItem>
          <Text>Residential Evil</Text>
        </ListItem>
        <ListItem last>
          <Text>Conjuring</Text>
        </ListItem>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem icon", () => {
  const tree = renderer
    .create(
      <List>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#FF9501" }}>
              <Icon active name="plane" />
            </Button>
          </Left>
          <Body>
            <Text>Airplane Mode</Text>
          </Body>
          <Right>
            <Switch value={false} onTintColor="#50B948" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>Bluetooth</Text>
          </Body>
          <Right>
            <Text>On</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#4CDA64" }}>
              <Icon active name="phone-portrait" />
            </Button>
          </Left>
          <Body>
            <Text>Mobile Data</Text>
          </Body>
          <Right>
            <Radio selected />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#FD3C2D" }}>
              <Icon active name="notifications" />
            </Button>
          </Left>
          <Body>
            <Text>Notifications</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon last>
          <Left>
            <Button style={{ backgroundColor: "#5855D6" }}>
              <Icon active name="moon" />
            </Button>
          </Left>
          <Body>
            <Text>Do Not Disturb</Text>
          </Body>
          <Right>
            <Text>Yes</Text>
          </Right>
        </ListItem>
        <ListItem last icon>
          <Left>
            <Button style={{ backgroundColor: "#8F8E93" }}>
              <Icon active name="cog" />
            </Button>
          </Left>
          <Body>
            <Text>Software Update</Text>
          </Body>
          <Right>
            <Badge style={{ backgroundColor: "#FD3C2D" }}>
              <Text>2</Text>
            </Badge>
          </Right>
        </ListItem>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem avatar", () => {
  const datas = [
    {
      img: pratik,
      text: "Kumar Pratik",
      note: "Its time to build a difference . ."
    },
    {
      img: sanket,
      text: "Kumar Sanket",
      note: "One needs courage to be happy and smiling all time . . "
    }
  ];
  const tree = renderer
    .create(
      <List
        dataArray={datas}
        renderRow={data => (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={55} source={data.img} />
            </Left>
            <Body>
              <Text>{data.text}</Text>
              <Text numberOfLines={1} note>
                {data.note}
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        )}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem thumbnail", () => {
  const datas = [
    {
      img: pratik,
      text: "Kumar Pratik",
      note: "Its time to build a difference . ."
    },
    {
      img: sanket,
      text: "Kumar Sanket",
      note: "One needs courage to be happy and smiling all time . . "
    }
  ];
  const tree = renderer
    .create(
      <List
        dataArray={datas}
        renderRow={data => (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={55} source={data.img} />
            </Left>
            <Body>
              <Text>{data.text}</Text>
              <Text numberOfLines={1} note>
                {data.note}
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        )}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem separator", () => {
  const tree = renderer
    .create(
      <List>
        <Separator bordered>
          <Text>MIDFIELD</Text>
        </Separator>
        <ListItem>
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem>
          <Text>Urbino Cendre</Text>
        </ListItem>
        <ListItem last>
          <Text>Lee Allen</Text>
        </ListItem>

        <Separator bordered>
          <Text>MIDFIELD</Text>
        </Separator>
        <ListItem>
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem>
          <Text>Urbino Cendre</Text>
        </ListItem>
        <ListItem last>
          <Text>Lee Allen</Text>
        </ListItem>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders ListItem noIndent", () => {
  const tree = renderer
    .create(
      <List>
        <ListItem
          noIndent
          style={{
            backgroundColor: "#cde1f9"
          }}
        >
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem>
          <Text>Urbino Cendre</Text>
        </ListItem>
        <ListItem>
          <Text>Lee Allen</Text>
        </ListItem>
      </List>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
