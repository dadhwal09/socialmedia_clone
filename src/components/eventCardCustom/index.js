import { View, Text, Dimensions,TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { Image } from 'react-native';
import Spacer from '../spacer';

const screenHeight = Dimensions.get('window').height;


const EventCardCustom = props => {
  const { text, text2, text3, text4, source, source1, source2, source3, onPress } = props;
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image
        source={source}
        style={styles.img}
      />
      <Spacer height={screenHeight * 0.01} />
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={source1}
          style={styles.img2}
        />
        <Text style={styles.text2}>{text2}</Text>
      </View>
      <Spacer height={screenHeight * 0.01} />
      <View style={{ flexDirection: 'row' }}>
        <Image source={source2}
          style={styles.img2}
        />
        <Text style={styles.text2}>{text3}</Text>
      </View>
      <Spacer height={screenHeight * 0.01} />
      <View style={{ flexDirection: 'row' }}>
        <Image source={source3}
          style={styles.img2}
        />
        <Text style={styles.text2}>{text4}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCardCustom;
