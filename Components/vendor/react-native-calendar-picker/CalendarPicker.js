/**
 * Calendar Picker Component
 * By Stephani Alves - April 11, 2015
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} = React;

var {
  WEEKDAYS,
  MONTHS,
  MAX_ROWS,
  MAX_COLUMNS,
  getDaysInMonth,
} = require('./Util');

var styles = require('./Styles');

var Day = React.createClass({
  propTypes: {
    onDayChange: React.PropTypes.func,
    selected: React.PropTypes.bool,
    day: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]).isRequired
  },
  getDefaultProps () {
    return {
      onDayChange () {}
    }
  },
  render() {
    if (this.props.selected) {
      return (
        <View style={styles.dayWrapper}>
          <View style={styles.dayButtonSelected}>
            <TouchableOpacity
              style={styles.dayButton}
              onPress={() => this.props.onDayChange(this.props.day) }>
              <Text style={styles.dayLabel}>
                {this.props.day}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.dayWrapper}>
          <TouchableOpacity
            style={styles.dayButton}
            onPress={() => this.props.onDayChange(this.props.day) }>
            <Text style={styles.dayLabel}>
              {this.props.day}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
});

var Days = React.createClass({
  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    onDayChange: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      selectedStates: [],
    };
  },

  componentDidMount() {
    this.updateSelectedStates(this.props.date.getDate());
  },

  updateSelectedStates(day) {
    var selectedStates = [],
      daysInMonth = getDaysInMonth(this.props.month, this.props.year),
      i;

    for (i = 1; i <= daysInMonth; i++) {
      if (i === day) {
        selectedStates.push(true);
      } else {
        selectedStates.push(false);
      }
    }

    this.setState({
      selectedStates: selectedStates,
    });

  },

  onPressDay(day) {
    this.updateSelectedStates(day);
    this.props.onDayChange({day: day});
  },

  // Not going to touch this one - I'd look at whether there is a more functional
  // way you can do this using something like `range`, `map`, `partition` and such
  // (see underscore.js), or just break it up into steps: first generate the array for
  // data, then map that into the components
  getCalendarDays() {
    var columns,
      matrix = [],
      i,
      j,
      month = this.props.month,
      year = this.props.year,
      currentDay = 0,
      thisMonthFirstDay = new Date(year, month, 1),
      slotsAccumulator = 0;

    for(i = 0; i < MAX_ROWS; i++ ) { // Week rows
      columns = [];

      for(j = 0; j < MAX_COLUMNS; j++) { // Day columns
        if (slotsAccumulator >= thisMonthFirstDay.getDay()) {
          if (currentDay < getDaysInMonth(month, year)) {
            columns.push(<Day
                      key={j}
                      day={currentDay+1}
                      selected={this.state.selectedStates[currentDay]}
                      date={this.props.date}
                      onDayChange={this.onPressDay} />);
            currentDay++;
          }
        } else {
          columns.push(<Day key={j} day={''}/>);
        }

        slotsAccumulator++;
      }
      matrix[i] = [];
      matrix[i].push(<View style={styles.weekRow}>{columns}</View>);
    }

    return matrix;
  },

  render() {
    return <View style={styles.daysWrapper}>{ this.getCalendarDays() }</View>;
  }

});

var WeekDaysLabels = React.createClass({
  render() {
    return (
      <View style={styles.dayLabelsWrapper}>
        { WEEKDAYS.map((day, key) => { return <Text key={key} style={styles.dayLabels}>{day}</Text> }) }
      </View>
    );
  }
});

var HeaderControls = React.createClass({
  propTypes: {
    month: React.PropTypes.number.isRequired,
    getNextYear: React.PropTypes.func.isRequired,
    getPrevYear: React.PropTypes.func.isRequired,
    onMonthChange: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      selectedMonth: this.props.month
    };
  },

  // Logic seems a bit awkawardly split up between here and the CalendarPicker
  // component, eg: getNextYear is actually modifying the state of the parent,
  // could just let header controls hold all of the logic and have CalendarPicker
  // `onChange` callback fire and update itself on each change
  getNext() {
    var next = this.state.selectedMonth + 1;
    if (next > 11) {
      this.setState({ selectedMonth: 0 });
      this.props.getNextYear();
    } else {
      this.setState({ selectedMonth: next });
    }

    this.props.onMonthChange(this.state.selectedMonth);
  },

  getPrevious() {
    var prev = this.state.selectedMonth - 1;
    if (prev < 0) {
      this.setState({ selectedMonth: 11 });
      this.props.getPrevYear();
    } else {
      this.setState({ selectedMonth: prev });
    }

    this.props.onMonthChange(this.state.selectedMonth);
  },

  render() {
    return (
      <View style={styles.headerWrapper}>
        <View style={styles.monthSelector}>
          <TouchableOpacity onPress={this.getPrevious}>
            <Text style={styles.prev}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.monthLabel}>
            { MONTHS[this.state.selectedMonth] } { this.props.year }
          </Text>
        </View>
        <View style={styles.monthSelector}>
          <TouchableOpacity onPress={this.getNext}>
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
});

var CalendarPicker = React.createClass({
  propTypes: {
    selectedDate: React.PropTypes.instanceOf(Date).isRequired,
    onDateChange: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      onDateChange () {}
    }
  },
  getInitialState() {
    return {
      date: this.props.selectedDate,
      day: this.props.selectedDate.getDate(),
      month: this.props.selectedDate.getMonth(),
      year: this.props.selectedDate.getFullYear(),
      selectedDay: [],
    };
  },

  onDayChange(day) {
    this.setState({day: day.day,});
    this.onDateChange();
  },

  onMonthChange(month) {
    this.setState({month: month,});
    this.onDateChange();
  },

  getNextYear(){
    this.setState({year: this.state.year + 1,});
    this.onDateChange();
  },

  getPrevYear() {
    this.setState({year: this.state.year - 1,});
    this.onDateChange();
  },

  onDateChange() {
    var {
      day,
      month,
      year
    } = this.state,
      date = new Date(year, month, day);

    this.setState({date: date,});
    this.props.onDateChange(date);
  },

  render() {
    return (
      <View style={styles.calendar}>
        <HeaderControls
          year= {this.state.year}
          month={this.state.month}
          onMonthChange={this.onMonthChange}
          getNextYear={this.getNextYear}
          getPrevYear={this.getPrevYear} />

        <WeekDaysLabels />

        <Days
          month={this.state.month}
          year={this.state.year}
          date={this.state.date}
          onDayChange={this.onDayChange} />
      </View>
    );
  }
});

module.exports = CalendarPicker;
