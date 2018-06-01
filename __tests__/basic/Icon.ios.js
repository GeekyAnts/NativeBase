import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Content } from "./../../src/basic/Content";
import { ListItem } from "./../../src/basic/ListItem";
import { Icon } from "./../../src/basic/Icon";
import { Text } from "./../../src/basic/Text";

// Note: test renderer must be required after react-native.

jest.mock("Platform", () => {
  const Platform = require.requireActual("Platform");
  Platform.OS = "ios";
  return Platform;
});

it("renders Icon and Icons with icon family", () => {
  const tree = renderer
    .create(
      <Content padder>
        <ListItem>
          <Icon name="logo-apple" style={{ width: 45, height: 45 }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Ionicons</Text>
          <Icon type="Ionicons" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Entypo</Text>
          <Icon type="Entypo" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Feather</Text>
          <Icon type="Feather" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>FontAwesome</Text>
          <Icon type="FontAwesome" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Foundation</Text>
          <Icon type="Foundation" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Material Icons</Text>
          <Icon type="MaterialIcons" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Material Community Icons</Text>
          <Icon
            type="MaterialCommunityIcons"
            name="home"
            style={{ color: "#999" }}
          />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Octicons</Text>
          <Icon type="Octicons" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Zocial</Text>
          <Icon type="Zocial" name="dropbox" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Simple Line Icons</Text>
          <Icon type="SimpleLineIcons" name="home" style={{ color: "#999" }} />
        </ListItem>
        <ListItem>
          <Text style={{ width: 220 }}>Evil Icons</Text>
          <Icon type="EvilIcons" name="trophy" style={{ color: "#999" }} />
        </ListItem>
      </Content>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
