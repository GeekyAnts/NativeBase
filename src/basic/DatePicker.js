import React from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';

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

  setDate(date) {
    this.setState({ chosenDate: new Date(date) });
    if (this.props.onDateChange) {
      this.props.onDateChange(date);
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

    return (
      <DateTimePicker
        date={
          this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate
        }
        onDateChange={date => this.setDate(date)}
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
