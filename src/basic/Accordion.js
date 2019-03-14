import React, { Component } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import { Text } from "./Text";
import { Icon } from "./Icon";
import variable from "../theme/variables/platform";

class DefaultHeader extends React.Component {
  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    return (
      <View
        style={[
          styles.defaultHeader,
          this.props.headerStyle
            ? this.props.headerStyle
            : { backgroundColor: variables.headerStyle }
        ]}
      >
        <Text> {this.props.title}</Text>
        <Icon
          style={[
            { fontSize: 18 },
            this.props.expanded
              ? this.props.expandedIcon && this.props.expandedIconStyle
                ? this.props.expandedIconStyle
                : { color: variables.expandedIconStyle }
              : this.props.icon && this.props.iconStyle
                ? this.props.iconStyle
                : { color: variables.iconStyle }
          ]}
          name={
            this.props.expanded
              ? this.props.expandedIcon
                ? this.props.expandedIcon
                : "ios-arrow-up"
              : this.props.icon
                ? this.props.icon
                : "ios-arrow-down"
          }
        />
      </View>
    );
  }
}

class DefaultContent extends React.Component {
  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    return (
      <Text
        style={[
          { padding: 10 },
          this.props.contentStyle
            ? this.props.contentStyle
            : { backgroundColor: variables.contentStyle }
        ]}
      >
        {this.props.content}
      </Text>
    );
  }
}

class AccordionSubItem extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0.3)
  };
  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{ ...this.props.style, opacity: fadeAnim }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

class AccordionItem extends React.Component {
  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => this.props.setSelected(this.props.index)}
        >
          <View>
            {this.props.renderHeader ? (
              this.props.renderHeader(this.props.item, this.props.expanded)
            ) : (
                <DefaultHeader
                  title={this.props.item.title}
                  expanded={this.props.expanded}
                  headerStyle={this.props.headerStyle}
                  icon={this.props.icon}
                  iconStyle={this.props.iconStyle}
                  expandedIcon={this.props.expandedIcon}
                  expandedIconStyle={this.props.expandedIconStyle}
                />
              )}
          </View>
        </TouchableWithoutFeedback>
        {this.props.expanded ? (
          <AccordionSubItem>
            {this.props.renderContent ? (
              this.props.renderContent(this.props.item)
            ) : (
                <DefaultContent
                  content={this.props.item.content}
                  contentStyle={this.props.contentStyle}
                />
              )}
          </AccordionSubItem>
        ) : null}
      </View>
    );
  }
}

export class Accordion extends React.Component {
  state = { selected: [] };

  setSelected(index) {
    const { expandMultiple } = this.props
    const selected = this.state.selected.slice()

    if (selected.indexOf(index) !== -1) {
      selected.splice(selected.indexOf(index), 1)
      this.setState({ selected });
    } else {
      selected.push(index)
      this.setState({ selected: expandMultiple ? selected : [index] });
    }
  }

  componentDidMount() {
    const { expanded, expandMultiple } = this.props
    if (expanded !== undefined && expanded !== null) {
      let selected = Array.isArray(expanded) ? expanded : [expanded]
      selected = expandMultiple ? selected : selected.slice(0, 1)
      this.setState({ selected });
    }
  }

  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    return (
      <FlatList
        data={this.props.dataArray}
        extraData={this.state}
        style={[
          {
            borderColor: variables.accordionBorderColor,
            borderWidth: variables.borderWidth
          },
          this.props.style
        ]}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <AccordionItem
            key={String(index)}
            item={item}
            expanded={this.state.selected.indexOf(index) !== -1}
            index={index}
            setSelected={this.setSelected.bind(this)}
            headerStyle={this.props.headerStyle}
            contentStyle={this.props.contentStyle}
            renderHeader={this.props.renderHeader}
            renderContent={this.props.renderContent}
            icon={this.props.icon}
            iconStyle={this.props.iconStyle}
            expandedIcon={this.props.expandedIcon}
            expandedIconStyle={this.props.expandedIconStyle}
          />
        )}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  defaultHeader: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  }
});