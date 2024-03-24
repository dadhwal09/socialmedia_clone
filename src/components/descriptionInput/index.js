import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const DescriptionCustom = props => {
  const {
    placeholder,
    placeholderTextColor,
    maxLength,
    secureTextEntry,
    value,
    onChangeText,
    label } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.bioText}>{label}</Text>
        <TextInput
          style={styles.descInput}
          placeholder={placeholder}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          textAlignVertical='center'
          multiline
        />
      </View>
    </View>
  );
};

export default DescriptionCustom;
