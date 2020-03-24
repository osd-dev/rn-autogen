import React, {Component} from 'react';
import {Text} from 'react-native';
import {Styles, sizeFont} from '@/commons';

export default class CustomText extends Component {
  render() {
    const {children, white, style, size, bold, medium} = this.props;
    return (
      <Text
        {...this.props}
        style={[
          Styles.text,
          white && Styles.textWhite,
          style,
          size && {fontSize: sizeFont(size)},
          bold && Styles.sheimproBold,
          medium && Styles.sheimproMedium,
        ]}>
        {children}
      </Text>
    );
  }
}
