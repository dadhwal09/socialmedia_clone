import {Dimensions, StyleSheet} from 'react-native';
import {bgColor, text} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const adjustHeight = height;
const adjustWidth = width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
    margin: 'auto',
  },
  imgArrow: {
    right: 110,
  },
  textInput: {
    left: 10,
  },
  textInput2: {
    left: 10,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 16,
    left: 10,
  },
  image: {
    height: adjustHeight * 0.13,
    width: (adjustWidth * 95) / 100,
    alignSelf: 'center',
  },
});
export default styles;
