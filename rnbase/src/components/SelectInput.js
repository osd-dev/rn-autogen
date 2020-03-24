import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Text from './Text';
import {Colors, sizeWidth, sizeHeight} from '@/commons';
const ic_down = require('@/assets/icons/ic_down-arrow.png');

class SelectInput extends React.Component {
  static defaultProps = {
    options: [], //options is array number, string or object {label, value}
    onPress: null,
  };

  state = {
    isVisible: false,
  };

  get selectedValue() {
    const {options, value} = this.props;
    if (typeof value === 'object') {
      return value.label;
    }
    const selected = options.find(x => x.value === value);
    return selected ? selected.label : '';
  }

  render() {
    let {
      style,
      placeholder,
      options,
      disabled,
      onPress,
      emptyItemText,
    } = this.props;
    return (
      <View style={[styles.selectContainer, style]}>
        <View style={style}>
          <TouchableOpacity
            style={styles.inputBtn}
            onPress={onPress ? onPress : this.show}
            disabled={disabled}>
            <Text
              style={[{flex: 1}, !this.selectedValue && styles.placeholder]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {this.selectedValue || placeholder}
            </Text>
            <Image source={ic_down} style={styles.arrowDownIcon} />
          </TouchableOpacity>

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isVisible}
            onRequestClose={this.hide}
            onDismiss={this.onDismiss}>
            <TouchableWithoutFeedback onPress={this.hide}>
              <View style={styles.modalContainer}>
                <View
                  style={[
                    styles.content,
                    !options.length && styles.contentNoChannel,
                  ]}>
                  {options.length ? (
                    <FlatList
                      keyExtractor={(_, index) => `${index}`}
                      data={options}
                      renderItem={this.renderItem}
                    />
                  ) : (
                    <Text>{emptyItemText}</Text>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </View>
    );
  }

  show = () => this.setState({isVisible: true});
  hide = () => this.setState({isVisible: false});

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.onPressItem(item)}>
        <Text>{typeof item === 'object' ? item.label : item}</Text>
      </TouchableOpacity>
    );
  };

  onPressItem = option => {
    this.option = option;
    this.setState({isVisible: false}, () => {
      const value = typeof option === 'object' ? option.value : option;
      this.props.onChange(value);
    });
  };

  onDismiss = () => {
    this.option && this.props.onChange(this.option);
  };
}

const styles = StyleSheet.create({
  inputBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingHorizontal: sizeWidth(2),
  },

  placeholder: {
    color: '#9099A0',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  contentNoChannel: {
    padding: sizeWidth(3),
    minHeight: sizeHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: sizeWidth(3),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    paddingVertical: sizeWidth(10),
    paddingHorizontal: sizeWidth(10),
  },
  selectContainer: {
    width: sizeWidth(28),
    height: sizeWidth(10),
    borderRadius: sizeWidth(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.cerulean + '33',
  },
  arrowDownIcon: {
    width: sizeWidth(2.5),
    height: sizeWidth(2.5),
    resizeMode: 'contain',
    marginLeft: sizeWidth(5),
    tintColor: Colors.cerulean,
  },
});
export default SelectInput;
