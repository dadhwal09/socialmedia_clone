import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from '../textInputCustom/style';

const TextInputCustom = props => {
  const {
    placeholder,
    placeholderTextColor,
    maxLength,
    secureTextEntry,
    value,
    onChangeText,
    label,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default TextInputCustom;
