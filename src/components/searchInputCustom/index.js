import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from '../textInputCustom/style';

const SearchInputCustom = props => {
  const {
    placeholder,
    placeholderTextColor,
    maxLength,
    secureTextEntry,
    value,
    onChangeText,
    label,
    source,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{label}</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            maxLength={maxLength}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
          />
          <Image source={source} style={styles.img} />
        </View>
      </View>
    </View>
  );
};

export default SearchInputCustom;
