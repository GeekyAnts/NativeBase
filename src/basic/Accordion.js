import React, { Component } from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from './Text';
import { Icon } from './Icon';
import variable from '../theme/variables/platform';

class DefaultHeader extends React.Component {
  render() {
    const {
      expanded,
      expandedIcon,
      expandedIconStyle,
      headerStyle,
      icon,
      iconStyle,
      title,
    } = this.props;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    return (
      <View
        style={[
          styles.defaultHeader,
          headerStyle || { backgroundColor: variables.headerStyle },
        ]}
      >
        <Text> {title}</Text>
        <Icon
          style={[
            { fontSize: variables.accordionIconFontSize },
            expanded
              ? expandedIcon && expandedIconStyle
                ? expandedIconStyle
                : { color: variables.expandedIconStyle }
              : icon && iconStyle
              ? iconStyle
              : { color: variables.iconStyle },
          ]}
          name={
            expanded ? expandedIcon || 'ios-arrow-up' : icon || 'ios-arrow-down'
          }
        />
      </View>
    );
  }
}

class DefaultContent extends React.Component {
  render() {
    const { content, contentStyle } = this.props;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    return (
      <Text
        style={[
          { padding: variable.accordionContentPadding },
          contentStyle || { backgroundColor: variables.contentStyle },
        ]}
      >
        {content}
      </Text>
    );
  }
}

class AccordionSubItem extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0.3),
  };
  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }
  render() {
    const { children, style } = this.props;
    const { fadeAnim } = this.state;
    return (
      <Animated.View style={{ ...style, opacity: fadeAnim }}>
        {children}
      </Animated.View>
    );
  }
}

class AccordionItem extends React.Component {
  render() {
    const {
      contentStyle,
      expanded,
      expandedIcon,
      expandedIconStyle,
      headerStyle,
      icon,
      iconStyle,
      index,
      item,
      onAccordionClose,
      onAccordionOpen,
      renderContent,
      renderHeader,
      setSelected,
    } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            onAccordionOpen && !expanded && onAccordionOpen(item, index);
            onAccordionClose && expanded && onAccordionClose(item, index);
            setSelected(index);
          }}
        >
          <View>
            {renderHeader ? (
              renderHeader(item, expanded, index)
            ) : (
              <DefaultHeader
                title={item.title}
                expanded={expanded}
                headerStyle={headerStyle}
                icon={icon}
                iconStyle={iconStyle}
                expandedIcon={expandedIcon}
                expandedIconStyle={expandedIconStyle}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        {expanded ? (
          <AccordionSubItem>
            {renderContent ? (
              renderContent(item, index)
            ) : (
              <DefaultContent
                content={item.content}
                contentStyle={contentStyle}
              />
            )}
          </AccordionSubItem>
        ) : null}
      </View>
    );
  }
}

export class Accordion extends React.Component {
  constructor(props) {
    super(props);

    const { expanded, expandMultiple } = this.props;
    let selected;
    if (expanded !== undefined && expanded !== null) {
      selected = Array.isArray(expanded) ? expanded : [expanded];
      selected = expandMultiple ? selected : selected.slice(0, 1);
    }
    this.state = {
      selected: selected,
    };
  }

  setSelected(index) {
    const { expandMultiple } = this.props;
    const selected = this.state.selected.slice();
    if (selected.indexOf(index) !== -1) {
      selected.splice(selected.indexOf(index), 1);
      this.setState({ selected });
    } else {
      selected.push(index);
      this.setState({ selected: expandMultiple ? selected : [index] });
    }
  }

  render() {
    const {
      contentStyle,
      dataArray,
      expandedIcon,
      expandedIconStyle,
      headerStyle,
      icon,
      iconStyle,
      onAccordionClose,
      onAccordionOpen,
      renderContent,
      renderHeader,
      style,
    } = this.props;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    return (
      <FlatList
        data={dataArray}
        extraData={this.state}
        style={[
          {
            borderColor: variables.accordionBorderColor,
            borderWidth: variables.borderWidth,
          },
          style,
        ]}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <AccordionItem
            key={String(index)}
            item={item}
            expanded={this.state.selected.indexOf(index) !== -1}
            index={index}
            setSelected={(i) => this.setSelected(i)}
            headerStyle={headerStyle}
            contentStyle={contentStyle}
            renderHeader={renderHeader}
            renderContent={renderContent}
            icon={icon}
            iconStyle={iconStyle}
            expandedIcon={expandedIcon}
            expandedIconStyle={expandedIconStyle}
            onAccordionOpen={onAccordionOpen}
            onAccordionClose={onAccordionClose}
          />
        )}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  defaultHeader: {
    flexDirection: 'row',
    padding: variable.accordionContentPadding,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
