import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Button, DateRangePicker} from '@/components';
import {colorOpacityMaker} from '@/commons';
import moment from 'moment';

export default class Login extends Component {
  openDateModal = () => {
    this.dateModalRef.open();
  };

  render() {
    const isDateBlocked = date => date.isAfter(moment(), 'day');
    return (
      <View>
        <Text> Login </Text>
        <Button onPress={this.openDateModal} text={'Login'} />

        <DateRangePicker
          onDone={this.onDone}
          ref={ref => (this.dateModalRef = ref)}
          isDateBlocked={isDateBlocked}></DateRangePicker>

        <Text>{colorOpacityMaker('#00A0E9',30)}</Text>
      </View>
    );
  }
}
