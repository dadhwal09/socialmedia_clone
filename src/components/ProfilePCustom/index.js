import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Spacer from '../spacer';
import styles from './styles';
const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const ProfilePScreen = props => {
  const { source, text, text2, source2, text3, source3, text4, text20, textCharl, textLos } = props;
  return (
    <View>
      <Spacer height={adjustHeight * 0.02} />
      <View style={styles.imgView}>
        <View style={styles.insideImgView}>
          <Image source={source} style={styles.img} />
          <Text style={styles.text20}>{text20}</Text>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text2}>{text2}</Text>
        </View>
        <View style={styles.insideImgView}>
          <Image source={source2} style={styles.imgWinni} />
          <Text style={styles.textWinni}>{text3}</Text>
          <Text style={styles.textLos}>{textLos}</Text>
        </View>
        <View style={styles.insideImgView}>
          <Image source={source3} style={styles.img} />
          <Text style={styles.text20}>{text4}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilePScreen;