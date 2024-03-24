import {StyleSheet, Dimensions} from 'react-native';
import {bgColor, text} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
    margin: 'auto',
  },
  text: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
  },
  img: {
    resizeMode: 'contain',
    height: adjustHeight * 0.03,
    width: adjustWidth * 0.1,
  },
  text: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
  },
  text1: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    marginLeft: 15,
    fontSize: 17,
    width: adjustWidth * 0.9,
  },
});
export default styles;
