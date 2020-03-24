import React, {Component} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import Text from './Text';
import {Styles, Colors} from '@/commons';

export default class Button extends Component {
  render() {
    const {
      style,
      onPress,
      disabled,
      children,
      text,
      loading,
      textStyle,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          Styles.button,
          style,
          (disabled || loading) && Styles.buttonDisabled,
        ]}
        disabled={disabled || loading}
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <>
            {text && (
              <Text style={textStyle} white>
                {text}
              </Text>
            )}
            {children}
          </>
        )}
      </TouchableOpacity>
    );
  }
}
