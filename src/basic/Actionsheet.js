import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Modal,
  Platform,
  ActionSheetIOS,
  TouchableOpacity,
  ViewPropTypes,
  FlatList
} from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import { Text } from "./Text";
import { Button } from "./Button";
import { ViewNB } from "./View";
import { Icon } from "./Icon";
import { Left } from "./Left";
import { Right } from "./Right";
import { Body } from "./Body";
import { ListItem } from "./ListItem";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class ActionSheetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      items: [],
    };
  }
  static actionsheetInstance;
  static show(config, callback) {
    this.actionsheetInstance._root.showActionSheet(config, callback);
  }
  showActionSheet(config, callback) {
    if (Platform.OS === "ios") {
      if (typeof config.options[0] == "object") {
        let options = config.options;
        let filtered = options.map(item => {
          return item.text;
        });
        config.options = filtered;
        ActionSheetIOS.showActionSheetWithOptions(config, callback);
      } else {
        ActionSheetIOS.showActionSheetWithOptions(config, callback);
      }
    } else {
      this.setState({
        items: config.options,
        title: config.title,
        message: config.message,
        destructiveButtonIndex: config.destructiveButtonIndex,
        cancelButtonIndex: config.cancelButtonIndex,
        modalVisible: true,
        callback: callback,
      });
    }
  }
  componentDidMount() {
    if (!this.props.autoHide && this.props.duration) {
      console.warn(`It's not recommended to set autoHide false with duration`);
    }
  }
  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.state.callback(this.state.cancelButtonIndex);
          this.setState({ modalVisible: false });
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.state.callback(this.state.cancelButtonIndex);
            this.setState({ modalVisible: false });
          }}
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            flex: 1,
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: "#fff",
              height: this.state.length * 80,
              maxHeight: "100%",
              padding: 15,
              elevation: 4
            }}
          >
            <Text style={{ color: "#757575" }}>{this.state.title}</Text>
            <FlatList
              style={{ marginHorizontal: -15, marginTop: 15 }}
              data={this.state.items}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ index, item }) => {
                return typeof this.state.items[0] === "string" ? (
                  <ListItem
                    onPress={() => {
                      this.state.callback(parseInt(index));
                      this.setState({ modalVisible: false });
                    }}
                    style={{ borderColor: "transparent" }}>
                    <Text>{item}</Text>
                  </ListItem>
                ) : (
                    <ListItem
                      onPress={() => {
                        this.state.callback(parseInt(index));
                        this.setState({ modalVisible: false });
                      }}
                      style={{ borderColor: "transparent" }}
                      icon
                    >
                      <Left>
                        <Icon
                          name={item.icon}
                          style={{
                            color: item.iconColor ? item.iconColor : undefined
                          }}
                        />
                      </Left>
                      <Body style={{ borderColor: "transparent" }}>
                        <Text>{item.text}</Text>
                      </Body>
                      <Right />
                    </ListItem>
                  )
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  }
}

ActionSheetContainer.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledActionSheetContainer = connectStyle(
  "NativeBase.ActionSheetContainer",
  {},
  mapPropsToStyleNames
)(ActionSheetContainer);

export { StyledActionSheetContainer as ActionSheetContainer };