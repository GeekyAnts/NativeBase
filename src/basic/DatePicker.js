import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import variable from '../theme/variables/platform';
import { PLATFORM } from 'native-base/src/theme/variables/commonColor';
export class DatePicker extends React.Component {
  static defaultProps = {
    disabled: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      defaultDate: props.defaultDate ? props.defaultDate : new Date(),
      show: false,
      chosenDate:
        !props.placeHolderText && props.defaultDate
          ? props.defaultDate
          : undefined,
    };
  }
  handlePress = (e) => {
    this.setState({ show: true });
  };
  setDate = (date) => {
    this.setState({ show: false });
    if (date) {
      this.setState({ chosenDate: new Date(date) });
      if (this.props.onDateChange) {
        this.props.onDateChange(date);
      }
    }
  };
  onChange = (event, date) => {
    this.setDate(date);
  };
  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date);
    }
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
  }
  render() {
    const {
      locale,
      disabled,
      maximumDate,
      minimumDate,
      placeHolderText,
      placeHolderTextStyle,
      textStyle,
      timeZoneOffsetInMinutes,
    } = this.props;
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    return (
      <View>
        {Platform.OS === 'android' && (
          <Text
            onPress={() => (!disabled ? this.handlePress() : undefined)}
            style={[
              {
                padding: variables.datePickerPadding,
                color: variables.datePickerTextColor,
              },
              this.state.chosenDate ? textStyle : placeHolderTextStyle,
            ]}
          >
            {this.state.chosenDate
              ? this.formatChosenDate(this.state.chosenDate)
              : placeHolderText || 'Select Date'}
          </Text>
        )}
        {(Platform.OS === 'ios' || this.state.show) && (
          <DateTimePicker
            value={
              this.state.chosenDate
                ? this.state.chosenDate
                : this.state.defaultDate
            }
            onChange={this.onChange}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            mode="date"
            androidMode="default"
            locale={locale}
            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
            {...this.props}
          />
        )}
      </View>
    );
  }
}
