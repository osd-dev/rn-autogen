import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Button, DateRangePicker} from '@/components';
import {colorOpacityMaker} from '@/commons';
import moment from 'moment';
import {connect} from 'react-redux';
import {Actions} from '@/store/actions';
import {bindActionCreators} from 'redux';

class Login extends Component {
  openDateModal = () => {
    this.dateModalRef.open();
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const isDateBlocked = date => date.isAfter(moment(), 'day');
    console.log(this.props.users);
    return (
      <View>
        <Text> Login </Text>
        <Button onPress={this.openDateModal} text={'Login'} />

        <DateRangePicker
          onDone={this.onDone}
          ref={ref => (this.dateModalRef = ref)}
          isDateBlocked={isDateBlocked}></DateRangePicker>

        <Text>{colorOpacityMaker('#00A0E9', 30)}</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    users: state.userReducers.users,
  }),
  dispatch => bindActionCreators(Actions, dispatch),
)(Login);
