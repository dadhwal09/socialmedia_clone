import {StyleSheet, Dimensions} from 'react-native';
import {bgColor, loginColor, textInputColor} from '../../../themes/color';
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
  imgArrow: {
    right: 125,
  },
  input: {
    left: 10,
    fontFamily: FontFamily.semiBold,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: textInputColor.black,
    left: 10,
    top: 10,
    fontSize: 16,
  },
});
export default styles;
