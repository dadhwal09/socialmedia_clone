import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Spacer from '../spacer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight;

const CheckboxCustom = (props) => { 
  const {onPress}=props
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkView}>
        <TouchableOpacity onPress={() => setCheck(!check)}>
          <ImageBackground
            source={require('../../assets/images/BoxUnCheck.png')}
            style={styles.backtouchble}>
            {check ? (
              <Image
                source={require('../../assets/images/BoxUnCheck.png')}
                style={styles.touchable}
              />
            ) : (
              <Image
                source={require('../../assets/images/check.png')}
                style={styles.touchable2}
              />
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.touchableText}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckboxCustom;
