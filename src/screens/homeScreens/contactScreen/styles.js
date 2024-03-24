import {Dimensions, StyleSheet} from 'react-native';
import {bgColor, loginColor, text} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
  },
  backArrow: {
    right: 95,
  },
  logoLock: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: adjustHeight * 0.15,
  },
  upperText: {
    top: 130,
    left: 15,
    color: loginColor.color,
    fontFamily: FontFamily.medium,
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20,
  },
  textInput1: {
    left: 10,
  },
});
export default styles;
