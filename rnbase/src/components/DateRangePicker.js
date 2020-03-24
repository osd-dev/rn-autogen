import React, {Component} from 'react';
import {View, Modal, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Dates from 'react-native-dates';
import {sizeWidth} from '@/commons';
import Button from './Button';
import validator from 'validator';

export default class DateRangePicker extends Component {
  state = {
    date: null,
    focus: 'startDate',
    startDate: null,
    endDate: null,
    visible: false,
  };

  open = () => this.setState({visible: true});
  hide = () => this.setState({visible: false});
  reset = () =>
    this.setState({
      startDate: null,
      endDate: null,
    });

  onDismiss = () => {
    const {onDone} = this.props;
    const {startDate, endDate} = this.state;
    onDone && onDone({startDate, endDate});
    this.hide();
  };

  isValid = () => {
    const {startDate, endDate} = this.state;
    const start = startDate ? startDate.toString() : '';
    const end = endDate ? endDate.toString() : '';

    return !validator.isEmpty(start) && !validator.isEmpty(end);
  };

  render() {
    const {visible} = this.state;
    const {isDateBlocked} = this.props;

    const onDatesChange = ({startDate, endDate, focusedInput}) =>
      this.setState({...this.state, focus: focusedInput}, () =>
        this.setState({...this.state, startDate, endDate}),
      );

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={this.hide}
        onDismiss={this.hide}>
        <TouchableWithoutFeedback onPress={this.hide}>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <Dates
                onDatesChange={onDatesChange}
                isDateBlocked={isDateBlocked}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                focusedInput={this.state.focus}
                range
              />
              <Button
                disabled={!this.isValid()}
                onPress={this.onDismiss}
                style={styles.selectedBtn}
                text="OK"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: sizeWidth(3),
    backgroundColor: '#3533335e',
  },
  wrapper: {
    backgroundColor: 'white',
    borderRadius: sizeWidth(2),
    padding: sizeWidth(2),
  },
  selectedBtn: {
    marginTop: sizeWidth(2.5),
  },
});
