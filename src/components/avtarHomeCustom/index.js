import {View, Text, TouchableOpacity, Dimensions,Image} from 'react-native';
import React from 'react'
import { Avatar } from '@rneui/base';
import styles from './styles';
import Spacer from '../spacer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const AvtarHome = () => {
  return (
    <View style={styles.avatarView}>
      <TouchableOpacity style={{marginLeft: 15}}>
        <Avatar
          size={60}
          rounded
          source={require('../../assets/images/profileIcon.png')}>
          <Avatar.Accessory
            size={20}
            Component={TouchableOpacity}
            source={require('../../assets/images/addImage.png')}
          />
        </Avatar>
      </TouchableOpacity>
      <View style={{flexDirection: 'column', marginLeft: 10, rowGap: 0.01}}>
        <Text style={[styles.text, {fontWeight: '600', fontSize: 15}]}>
          Charlotte
        </Text>
        <Spacer height={adjustHeight * 0.001} />
        <Text style={styles.text}>Los Angeles</Text>
        <Text style={styles.text}>10/01/2022 06:57 AM</Text>
      </View>
      
    </View>
  );
}

export default AvtarHome;