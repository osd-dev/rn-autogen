import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@/components';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text size={30} bold>
          Settings
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
