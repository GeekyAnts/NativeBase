import React from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

import variable from '../theme/variables/platform';
import { Text } from './Text';
import { Icon, IconName } from './Icon';
type AccordionSubItemState = {
  fadeAnim: Animated.Value;
};
type AccordionState = {
  selected: undefined | any;
};

interface DefaultHeaderProps {
  expanded: boolean;
  expandedIcon: IconName;
  expandedIconStyle: StyleProp<ViewStyle>;
  headerStyle: StyleProp<ViewStyle>;
  icon: IconName;
  iconStyle: StyleProp<ViewStyle>;
  title: string;
}

class DefaultHeader extends React.Component<DefaultHeaderProps, {}> {
  render() {
    const { expanded, expandedIcon, expandedIconStyle, headerStyle, icon, iconStyle, title } = this.props;
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;

    return (
      <View style={[styles.defaultHeader, headerStyle || { backgroundColor: variables.headerStyle }]}>
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
          name={expanded ? expandedIcon || 'ios-arrow-up' : icon || 'ios-arrow-down'}
        />
      </View>
    );
  }
}

interface DefaultContentProps {
  contentStyle: TextStyle;
  content: string;
}

class DefaultContent extends React.Component<DefaultContentProps, {}> {
  render() {
    const { content, contentStyle } = this.props;
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;

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

interface AccordionSubItemProps {
  style?: ViewStyle;
}

class AccordionSubItem extends React.Component<AccordionSubItemProps, AccordionSubItemState> {
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

    return <Animated.View style={{ ...style, opacity: fadeAnim }}>{children}</Animated.View>;
  }
}

interface AccordionItemProps {
  contentStyle: ViewStyle;
  expanded: boolean;
  expandedIcon: IconName;
  expandedIconStyle: any;
  headerStyle: any;
  icon: IconName;
  iconStyle: any;
  index: number;
  item: any;
  onAccordionClose: any;
  onAccordionOpen: any;
  renderContent: any;
  renderHeader: any;
  setSelected: (i: number) => void;
}

class AccordionItem extends React.Component<AccordionItemProps, {}> {
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
              renderHeader(item, expanded)
            ) : (
              <DefaultHeader
                expanded={expanded}
                expandedIcon={expandedIcon}
                expandedIconStyle={expandedIconStyle}
                headerStyle={headerStyle}
                icon={icon}
                iconStyle={iconStyle}
                title={item.title}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        {expanded ? (
          <AccordionSubItem>
            {renderContent ? (
              renderContent(item)
            ) : (
              <DefaultContent content={item.content} contentStyle={contentStyle} />
            )}
          </AccordionSubItem>
        ) : null}
      </View>
    );
  }
}

interface AccordionProps {
  expanded?: boolean;
  contentStyle?: ViewStyle;
  dataArray: any;
  expandedIcon?: IconName;
  expandedIconStyle?: any;
  headerStyle?: any;
  icon?: IconName;
  iconStyle?: any;
  onAccordionClose?: any;
  onAccordionOpen?: any;
  renderContent?: any;
  renderHeader?: any;
  style?: ViewStyle;
}

export class Accordion extends React.Component<AccordionProps, AccordionState> {
  constructor(props: Readonly<AccordionProps>) {
    super(props);
    this.state = {
      selected: props.expanded,
    };
  }
  setSelected(index: number) {
    if (this.state.selected === index) {
      this.setState({ selected: undefined });
    } else {
      this.setState({ selected: index });
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
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;

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
            contentStyle={contentStyle}
            expanded={this.state.selected === index}
            expandedIcon={expandedIcon}
            expandedIconStyle={expandedIconStyle}
            headerStyle={headerStyle}
            icon={icon}
            iconStyle={iconStyle}
            index={index}
            item={item}
            renderContent={renderContent}
            renderHeader={renderHeader}
            onAccordionOpen={onAccordionOpen}
            onAccordionClose={onAccordionClose}
            setSelected={i => this.setSelected(i)}
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
