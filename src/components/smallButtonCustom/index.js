import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const SmallButtonCustom = props => {
  const {title, onPress} = props;
  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.buttonTouchable} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SmallButtonCustom;
