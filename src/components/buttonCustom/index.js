import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const ButtonCustom = props => {
  const {title, onPress,style} = props;
  return (
    <View style={[styles.button,style]}>
      <TouchableOpacity style={styles.buttonTouchable} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCustom;
