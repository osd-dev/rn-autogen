import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';

export default class EmptyData extends PureComponent {
  render() {
    const {text} = this.props;
    return (
      <View style={styles.container}>
        <Text>{text || 'No data to display'}</Text>
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
