import {StyleSheet, Dimensions} from 'react-native';
import {text, textInputColor} from '../../themes/color';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const adjustedHeight = screenHeight * 0.07; // 10% of screen height

const styles = StyleSheet.create({
  inputContainer: {
    gap: 3,
  },
  input: {
    width: '95%',
    height: adjustedHeight,
    fontFamily: FontFamily.semiBold,
    borderRadius: 14,
    backgroundColor: '#FFFAF1',
    shadowColor: '#F87C52',
    elevation: 10,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20.72,
  },
  img: {
    resizeMode: 'contain',
    height: 45,
    width: 50,
    right: 55,
    top:5
 }
});
export default styles;
