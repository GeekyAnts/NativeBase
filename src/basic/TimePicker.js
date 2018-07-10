import React from "react";
import { TimePickerAndroid, DatePickerIOS, Platform, Modal, View } from "react-native";
import { Text } from "./Text";
import variable from "../theme/variables/platform";

export class TimePicker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      defaultDate: undefined,
      date: undefined,
      modalVisible: false
    }
  }


  componentDidMount() {
    let date = new Date();
    if (this.props.hour) {
      date.setHours(this.props.hour)
    }
    if (this.props.minute) {
      date.setMinutes(this.props.minute)
    }
    this.setState({ defaultDate: date })
  }

  showTimePicker() {
    if (Platform.OS === "android") {
      this.showAndroidTimePicker();
    } else {
      this.setState({ modalVisible: true });
    }
  }

  async showAndroidTimePicker() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: this.state.date ? this.state.date.getHours() : this.state.defaultDate.getHours(),
        minute: this.state.date ? this.state.date.getMinutes() : this.state.defaultDate.getMinutes(),
        is24Hour: this.props.is24Hour,
        mode: this.props.mode

      });
      if (action !== TimePickerAndroid.dismissedAction) {
        let oldDate = (this.state.date ? this.state.date : this.state.defaultDate);
        let date = new Date(oldDate)
        date.setHours(hour);
        date.setMinutes(minute);
        this.onTimeChange(date)
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  onTimeChange(date) {
    this.setState({ date: date })
    if (this.props.onTimeChange) {
      this.props.onTimeChange(date)
    }
  }

  render() {
    const variables = this.context.theme
            ? this.context.theme["@@shoutem.theme/themeStyle"].variables
            : variable;

    return (<View style={this.props.style}>
            <Text onPress={this.showTimePicker.bind(this)} style={[{ padding: 10, color: variables.timePickerTextColor }, this.state.date ? this.props.textStyle : this.props.placeholderStyle]}>{this.state.date ? this.state.date.getHours() + " : " + this.state.date.getMinutes() : this.props.placeholder ? this.props.placeholder : "Select time "}</Text>
            <Modal
                animationType={this.props.animationType}
                transparent={this.props.modalTransparent}
                visible={this.state.modalVisible}
                onRequestClose={() => { }}
            >
                <Text
                    onPress={() => this.setState({ modalVisible: false })}
                    style={{ backgroundColor: variables.timePickerBg, flex: 1 }}
                />
                <DatePickerIOS
                    date={this.state.date ? this.state.date : this.state.defaultDate}
                    minuteInterval={this.props.minuteInterval}
                    onDateChange={(date) => this.onTimeChange(date)}
                    mode="time"
                    locale={this.props.is24Hour ? "fr" : "en"}
                    timeZoneOffsetInMinutes={this.props.timeZoneOffsetInMinutes}
                />
            </Modal>
        </View>)
  }
}
