import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from '@rneui/base';
import styles from './styles';

const AvatarCustom = props => {
  const { size, rounded, source, title,style } = props;
  return (
    <View style={styles.avtar}>
      <Avatar size={size} rounded={rounded} source={source} title={title}>
        <Avatar.Accessory
          Component={TouchableOpacity}
          size={30}
          source={require('../../assets/images/addImage.png')}
        />
      </Avatar>
    </View>
  );
};

export default AvatarCustom;
