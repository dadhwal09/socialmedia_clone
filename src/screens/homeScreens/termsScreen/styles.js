import {StyleSheet, Dimensions} from 'react-native';
import {bgColor, loginColor, text} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    backgroundColor: bgColor.white,
  },
  text: {
    height: adjustedHeight * 0.28,
    width: (adjustWidth * 95) / 100,
    alignSelf: 'center',
    fontFamily: FontFamily.medium,
    color: text.textColor,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.5,
  },
  backArrow: {
    right:110
  }
});
export default styles;
