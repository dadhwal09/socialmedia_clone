import { StyleSheet, Dimensions } from 'react-native';
import { bgColor, loginColor, text, textLine, touchableOpacity } from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight * 0.07;
const adjustWidth = screenWidth * 0.49;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
    margin: 'auto',
  },
  text: {
    textAlign: 'center',
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 31.69,
  },
  textInput1: {
    left: 10,
  },
  textInput2: {
    left: 10,
  },
  textInput3: {
    left: 10,
  },
  textLine: {
    textAlign: 'center',
    fontFamily: FontFamily.semiBold,
    color: textLine.lineColor,
    fontSize: 13,
    lineHeight: 15.85
  },
  loginTouchable: {
    flexDirection: 'row',
    color: loginColor.color,
    fontFamily: FontFamily.medium,
    fontSize: 17,
    fontWeight: '500',
    alignSelf: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: textLine.lineColor,
    fontFamily: FontFamily.medium,
    fontSize: 17,
    fontWeight: '500',
    margin: 5,
  },
  touchableText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 17,
    // height: 21,
    lineHeight: 20,
    fontFamily: FontFamily.semiBold,
    color: touchableOpacity.orange,
  },
});
export default styles;
