import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Spacer from '../spacer';
import { dotRow, subRow, textInputColor } from '../../themes/color';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const SubScriptSliderCustom = (props) => {
  const data = [
    {
      id: 0,
      text: '$99',
      text2: 'Annual',
      text3: 'Frendii Wellness',
    },
    {
      id: 1,
      text: '$12.99',
      text2: 'Per Month',
      text3: 'Frendii Socail',
    },
    {
      id: 2,
      text: '$12.99',
      text2: 'Annual',
      text3: 'Frendii Socail Plus',
    },
  ];
  const [imageData, setImageData] = useState([data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { text, text2, text3 } = props
  return (
    <View>
      <Spacer height={adjustHeight * 0.03} />
      <View style={styles.sliderView}>
        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={true}
          pagingEnabled
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / adjustWidth).toFixed(0));
            }}
          data={imageData}
          renderItem={setImageData}
          //   keyExtractor={item => item.key.toString()}
        />
      </View>
      <Spacer height={adjustHeight * 0.1} />
      <View style={{flexDirection: 'row', alignSelf: 'center', gap: 5}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor:
                  currentIndex == index ? dotRow.dotColor : subRow.dotColor2,
                borderRadius: 10,
                width: adjustWidth * 0.04,
                height: adjustHeight * 0.02,
              }}></TouchableOpacity>
          );
            // }*/}
        <View style={styles.circle}>
          {/* <Text >$12.99</Text> */}
        </View>
      </View>
    </View>
  );
};

export default SubScriptSliderCustom;
