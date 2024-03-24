import React, {useState} from 'react';
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
import {dotRow, textInputColor} from '../../themes/color';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const ImageSlider = () => {
  const [imageData, setImageData] = useState([
    {src: require('../../assets/images/slider1.png'), key: 0},
    {src: require('../../assets/images/slider2.png'), key: 1},
    {src: require('../../assets/images/slider3.png'), key: 2},
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View>
      <Spacer height={adjustHeight * 0.05} />
      <View style={styles.sliderView}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / adjustWidth).toFixed(0));
          }}
          data={imageData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                disabled={true}
                style={{
                  marginLeft: 20,
                  marginRight: 5,
                }}>
                <Spacer height={adjustHeight * 0.025} />
                <Image
                  source={item.src}
                  style={{
                    height: (adjustHeight * 20) / 100,
                    width: (adjustWidth * 77) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.key.toString()}
        />
      </View>
      <Spacer height={adjustHeight * 0.05} />
      <View style={{flexDirection: 'row', alignSelf: 'center', gap: 5}}>
        {imageData.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor:
                  currentIndex == index ? dotRow.dotColor : textInputColor.grey,
                borderRadius: 10,
                width: adjustWidth * 0.04,
                height: adjustHeight * 0.02,
              }}></View>
          );
        })}
      </View>
    </View>
  );
};

export default ImageSlider;
