import React from 'react';
import { Modal, View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import variable from '../theme/variables/platform';

import { Text } from './Text';

export class DatePicker extends React.Component {
  static defaultProps = {
    disabled: false
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      defaultDate: props.defaultDate ? props.defaultDate : new Date(),
      chosenDate:
        !props.placeHolderText && props.defaultDate
          ? props.defaultDate
          : undefined
    };
  }

  setDate(date) {
    this.setState({ chosenDate: new Date(date) });
    if (this.props.onDateChange) {
      this.props.onDateChange(date);
    }
  }

  showDatePicker = () => {
    this.setState({ modalVisible: true });
  };

  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date);
    }
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
  }

  render() {
    const {
      animationType,
      disabled,
      locale,
      maximumDate,
      minimumDate,
      modalTransparent,
      placeHolderText,
      placeHolderTextStyle,
      textStyle,
      timeZoneOffsetInMinutes
    } = this.props;

    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    return (
      <View>
        <View>
          <Text
            onPress={() => (!disabled ? this.showDatePicker() : undefined)}
            style={[
              {
                padding: variables.datePickerPadding,
                color: variables.datePickerTextColor
              },
              this.state.chosenDate ? textStyle : placeHolderTextStyle
            ]}
          >
            {this.state.chosenDate
              ? this.formatChosenDate(this.state.chosenDate)
              : placeHolderText || 'Select Date'}
          </Text>
          <View>
            <Modal
              supportedOrientations={['portrait', 'landscape']}
              animationType={animationType}
              transparent={modalTransparent} // from api
              visible={this.state.modalVisible}
              onRequestClose={() => {}}
            >
              <Text
                onPress={() => this.setState({ modalVisible: false })}
                style={{
                  backgroundColor: variables.datePickerBg,
                  flex: variables.datePickerFlex
                }}
              />
              <DateTimePicker
                date={
                  this.state.chosenDate
                    ? this.state.chosenDate
                    : this.state.defaultDate
                }
                onDateChange={date => this.setDate(date)}
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                mode="date"
                locale={locale}
                timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
                {...this.props}
              />
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}
