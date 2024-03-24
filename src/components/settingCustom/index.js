import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const SettingCustom = props => {
  const {source, text, rightArrow,onPress} = props;
  return (
    <View style={styles.mainView}>
      <Image source={source} style={styles.leftImg} />
      <View style={{top:10}}>
        <Text style={styles.text}>{text}</Text>
        <View style={{ left: 200,bottom:25}}>
          <TouchableOpacity onPress={onPress}>
            <Image source={rightArrow} style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingCustom;
