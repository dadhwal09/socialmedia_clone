import {Avatar} from '@rneui/base';
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import HeaderCustom from '../../../components/headerCustom';
import ImageSlider from '../../../components/sliderCustom';
import Spacer from '../../../components/spacer';
import strings from '../../../themes/constants/strings';
import styles from './styles';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const PostDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={strings.postDetail}
        source={require('../../../assets/images/backarrow.png')}
        onPress={() => navigation.navigate('Home')}
      />
      <Spacer height={adjustHeight * 0.03} />
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Avatar
          size={60}
          rounded
          source={require('../../../assets/images/profileIcon.png')}>
          <Avatar.Accessory
            size={20}
            Component={TouchableOpacity}
            source={require('../../../assets/images/addImage.png')}
          />
        </Avatar>
        <View style={{flexDirection: 'column', marginLeft: 10, rowGap: 0.01}}>
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
              source={require('../../../assets/images/heart.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
            <Image
              source={require('../../../assets/images/Comment.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/flag.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ImageSlider />
      <Spacer height={adjustHeight * 0.01} />
      <Text style={styles.text1}>Get Together</Text>
      <Spacer height={adjustHeight * 0.01} />
      <Text style={styles.text1}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Text>
    </View>
  );
};

export default PostDetail;
