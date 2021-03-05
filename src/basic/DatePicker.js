import React from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';

import variable from '../theme/variables/platform';

export class DatePicker extends React.Component {
  static defaultProps = {
    disabled: false
  };
  constructor(props) {
    super(props);
    this.state = {
      defaultDate: props.defaultDate ? props.defaultDate : new Date(),
      chosenDate:
        !props.placeHolderText && props.defaultDate
          ? props.defaultDate
          : undefined
    };
  }

  setDate(event, selectedDate) {
    this.setState({ chosenDate: new Date(selectedDate) });
    if (this.props.onDateChange) {
      this.props.onDateChange(selectedDate);
    }
  }

  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date);
    }
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
  }

  render() {
    const {
      locale,
      maximumDate,
      minimumDate,
      timeZoneOffsetInMinutes
    } = this.props;

    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;

    return (
      <DateTimePicker
        date={
          this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate
        }
        value={
          this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate
        }
        onChange={this.setDate}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        mode="date"
        locale={locale}
        timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
        {...this.props}
      />
    );
  }
}
