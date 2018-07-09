import React from "react";
import {
  Modal,
  View,
  Platform,
  DatePickerIOS,
  DatePickerAndroid
} from "react-native";
import { Text } from "native-base";
import variable from "../theme/variables/platform";

export class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      defaultDate: new Date(),
      chosenDate: undefined
    };
  }

  componentDidMount = () => {
    this.setState({
      defaultDate: this.props.defaultDate ? this.props.defaultDate : new Date()
    });
    if (!this.props.placeHolderText && this.props.defaultDate) {
      this.setState({ chosenDate: this.props.defaultDate })
    }
  };

  setDate(date) {
    this.setState({ chosenDate: new Date(date) });
    if (this.props.onDateChange) {
      this.props.onDateChange(date);
    }
  }

  hideModal() {
    this.setState({ modalVisible: false });
    if (!this.state.chosenDate && this.props.selectDefaultDate) {
      this.setState({ chosenDate: this.state.defaultDate })
    }
  }

  showDatePicker() {
    if (Platform.OS === "android") {
      this.openAndroidDatePicker();
    } else {
      this.setState({ modalVisible: true });
    }
  }

  async openAndroidDatePicker() {
    try {
      const newDate = await DatePickerAndroid.open({
        date: this.state.chosenDate
          ? this.state.chosenDate
          : this.state.defaultDate,
        minDate: this.props.minimumDate,
        maxDate: this.props.maximumDate,
        mode: this.props.androidMode
      });
      const { action, year, month, day } = newDate;
      if (action === "dateSetAction") {
        let selectedDate = new Date(year, month, day);
        this.setState({ chosenDate: selectedDate });
        this.props.onDateChange(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  render() {
    const variables = this.context.theme
      ? this.context.theme["@@shoutem.theme/themeStyle"].variables
      : variable;
    return (
      <View>
        <View>
          <Text
            onPress={this.showDatePicker.bind(this)}
            style={[
              { padding: 10, color: variables.datePickerTextColor },
              this.state.chosenDate ? this.props.textStyle : this.props.placeHolderTextStyle
            ]}
          >
            {this.state.chosenDate
              ? this.state.chosenDate.getDate() +
              "/" +
              (this.state.chosenDate.getMonth() + 1) +
              "/" +
              +this.state.chosenDate.getFullYear()
              : this.props.placeHolderText
                ? this.props.placeHolderText
                : "Select Date"}
          </Text>
          <View>
            <Modal
              animationType={this.props.animationType}
              transparent={this.props.modalTransparent} //from api
              visible={this.state.modalVisible}
              onRequestClose={() => { }}
            >
              <Text
                onPress={this.hideModal.bind(this)}
                style={{ backgroundColor: variables.datePickerBg, flex: 1 }}
              />
              <DatePickerIOS
                date={
                  this.state.chosenDate
                    ? this.state.chosenDate
                    : this.state.defaultDate
                }
                onDateChange={this.setDate.bind(this)}
                minimumDate={this.props.minimumDate}
                maximumDate={this.props.maximumDate}
                mode="date"
                locale={this.props.locale}
                timeZoneOffsetInMinutes={this.props.timeZoneOffsetInMinutes}
              />
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}
