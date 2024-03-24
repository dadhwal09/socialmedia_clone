import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { bgColor } from '../../themes/color';
import styles from './styles';
import { Avatar } from '@rneui/base';

const HeaderCustom = props => {
  const {
    onPress,
    onPressRight,
    text,
    sourceImg,
    source,
    style,
    styleRight,
    size,
    rounded,
    sourceAvatar,
    textAvatar,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={[styles.backArrow, style]} source={source} />
      </TouchableOpacity>
      {/* <Avatar
        size={size}
        rounded={rounded}
        source={sourceAvatar}
        containerStyle={{
          right: 70,
        }}
      />
      <Text style={styles.textAvatar} >{textAvatar}</Text> */}
      <Text style={styles.text} ellipsizeMode='middle'>{text}</Text>
      <TouchableOpacity onPress={onPressRight}>
        <Image source={sourceImg} style={[styles.rightIcon, styleRight]} />
      </TouchableOpacity>
    </View>

  );
};

export default HeaderCustom;
