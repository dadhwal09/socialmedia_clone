import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Avatar} from '@rneui/base';
import Spacer from '../spacer';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';
import {useNavigation} from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const CardCustom = props => {
  const navigation = useNavigation();
  const messageButton = () => {
    navigation.navigate('Comments');
  };
  const createPostButton = () => {
    navigation.navigate('CreatePost');
  }
  const {onPress} = props;
  return (
    <View>
      <Spacer height={adjustHeight * 0.02} />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Spacer height={adjustHeight * 0.02} />
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
            <View
              style={{flexDirection: 'column', marginLeft: 10, rowGap: 0.01}}>
              <Text style={[styles.text, {fontWeight: '600', fontSize: 15}]}>
                Charlotte
              </Text>
              <Spacer height={adjustHeight * 0.001} />
              <Text style={styles.text}>Los Angeles</Text>
              <Text style={styles.text}>10/01/2022 06:57 AM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/heart.png')}
                  style={styles.img}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => messageButton()}>
                <Image
                  source={require('../../assets/images/Comment.png')}
                  style={styles.img}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/flag.png')}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Spacer height={adjustHeight * 0.01} />
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/main.png')}
              style={styles.mainImg}
            />
            <View style={styles.imgCol}>
              <Image
                source={require('../../assets/images/main1.png')}
                style={styles.main1Img}
              />
              <Image
                source={require('../../assets/images/main2.png')}
                style={styles.main1Img}
              />
              <Image
                source={require('../../assets/images/main3.png')}
                style={styles.main1Img}
              />
            </View>
          </View>
          <Text
            style={[
              styles.text,
              {marginLeft: 20, fontWeight: '500', fontSize: 17, bottom: 10},
            ]}>
            Get Together
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardCustom;
