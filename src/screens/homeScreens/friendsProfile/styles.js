import { Dimensions, StyleSheet } from 'react-native';
import { bgColor, text } from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const screenHeight = height;
const screenWidth = width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
  },
  arrow: {
    right: 130,
  },
  textWinni: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    fontSize: 14,
    height: screenHeight * 0.09,
    width: screenWidth * 0.9,
    alignSelf: 'center',
    bottom: 25
  },
  btnView: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 50
  },
  btn: {
    borderColor: '#FF7019',
    borderWidth: 3,
    borderRadius: 10,
    margin: 3,
    height: screenHeight * 0.04,
    width: screenWidth * 0.23,
    justifyContent: 'center'
  },
  btnView2: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 50,
    right: 42
  },
  btn2: {
    borderColor: '#FF7019',
    borderWidth: 3,
    borderRadius: 10,
    padding: 5,
    margin: 3,
    height: screenHeight * 0.04,
    width: screenWidth * 0.26,
    justifyContent: 'center'
  },

  btnView3: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 50,
    right: 80
  },
  btn3: {
    borderColor: '#FF7019',
    borderWidth: 3,
    borderRadius: 10,
    margin: 4,
    height: screenHeight * 0.04,
    width: screenWidth * 0.3,
    justifyContent: 'center',
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 13,
    alignSelf: 'center'
  },
  text2: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 13,
  },
  imgView: {
    flexDirection: 'row',
    margin: 4,
    bottom: 44,
    alignSelf: 'center'
  },
  img: {
    height: screenHeight * 0.14,
    width: screenWidth * 0.28,
    margin: 8
  },
  textMore: {
    fontFamily: FontFamily.semiBold,
    color: '#FF7019',
    fontSize: 20,
    left: 330,
    bottom: 50
  },
});
export default styles;