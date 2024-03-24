import { StyleSheet, Dimensions } from 'react-native';
import { bgColor, loginColor } from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,

  },
  addImg: {
    resizeMode: 'contain',
    height: adjustHeight * 0.06,
    width: adjustWidth * 0.11,
    left: 110
  }
});
export default styles;
