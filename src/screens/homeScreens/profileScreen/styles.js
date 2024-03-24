import { Dimensions, StyleSheet } from 'react-native';
import { bgColor, text } from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('screen').height;
const adjustHeight = screenHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    backgroundColor: bgColor.white,
  },
  backArrow: {
    right:60
  },
  text2: {
    // height:adjustHeight*0.02,
    left: 165,
    fontSize: 15,
    lineHeight: 18.29,
    fontFamily: FontFamily.semiBold,
    bottom: 50,
  },
  interestText: {
    left: 10,
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20.72,
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
  textInput4: {
    left: 10,

  },


});
export default styles;
