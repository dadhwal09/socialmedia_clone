import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Avatar} from '@rneui/base';
import Spacer from '../spacer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const ListCardCustom = props => {
  const {
    onPress,
    size,
    rounded,
    source,
    text,
    text2,
    text3,
    SmallButtonCustom1,
    SmallButtonCustom2,
    SmallButtonCustom3,
  } = props;
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Spacer height={adjustHeight * 0.01} />
      <View style={{flexDirection: 'row', marginLeft: 10, top: 10}}>
        <Avatar size={size} rounded={rounded} source={source} />
        <View style={{}}>
          <Spacer height={adjustHeight * 0.01} />
          <Text style={[styles.text, {fontWeight: '600', fontSize: 15}]}>
            {text}
          </Text>
          <Text style={styles.text}>{text2}</Text>
          <Text style={styles.text3}>{text3}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>{SmallButtonCustom1}</View>
          <View style={styles.button2}>{SmallButtonCustom2}</View>
          <View style={styles.button3}>{SmallButtonCustom3}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListCardCustom;
