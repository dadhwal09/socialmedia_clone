import { StyleSheet, Dimensions } from 'react-native';
import { bgColor, text } from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';

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
  backArrow: {
    right: 100,
    height: 30,
    width: 30,
    resizeMode: 'contain',
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
  circle: {
    height: screenHeight * 0.08,
    width: screenWidth * 0.16,
    borderRadius: (screenHeight + screenWidth) / 2,
    backgroundColor: '#FFFAF1',
    shadowColor: '#FF7019',
    elevation: 10,
    position: 'absolute',
    bottom: 100,
    right: 20,
    justifyContent: 'center',
  },
  searchImg: {
    resizeMode: 'contain',
    height: screenHeight * 0.04,
    width: screenWidth * 0.08,
    alignSelf: 'center',
  },
});
export default styles;
