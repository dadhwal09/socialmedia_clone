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
    right: 100,
    height: screenHeight * 0.03,
  },
  textWinni: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    fontSize: 14,
    height: screenHeight * 0.09,
    width: screenWidth * 0.9,
    alignSelf: 'center',
    bottom: 40,
  },
  btnView: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 70,
  },
  btn: {
    borderColor: '#FF7019',
    borderWidth: 3,
    borderRadius: 10,
    margin: 3,
    height: screenHeight * 0.04,
    width: screenWidth * 0.23,
    justifyContent: 'center',
  },
  btnView2: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 70,
    right: 42,
  },
  btn2: {
    borderColor: '#FF7019',
    borderWidth: 3,
    borderRadius: 10,
    padding: 5,
    margin: 3,
    height: screenHeight * 0.04,
    width: screenWidth * 0.26,
    justifyContent: 'center',
  },

  btnView3: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 70,
    right: 80,
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
    alignSelf: 'center',
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
    alignSelf: 'center',
  },
  img: {
    height: screenHeight * 0.11,
    width: screenWidth * 0.27,
    margin: 8,
    borderRadius: 5,
    bottom: 30,
  },
  textMore: {
    fontFamily: FontFamily.semiBold,
    color: '#FF7019',
    fontSize: 20,
    left: 310,
    bottom: 85,
  },
  styleRight: {
    height: screenHeight * 0.03,
    left: 100,
  },
  circle: {
    height: screenHeight * 0.08,
    width: screenWidth * 0.16,
    borderRadius: (screenHeight + screenWidth) / 2,
    backgroundColor: '#FFFAF1',
    shadowColor: '#FF7019',
    elevation: 10,
    position: 'absolute',
    bottom: 7,
    right: 10,
    justifyContent:'center'
  },
  searchImg: {
    resizeMode: 'contain',
    height: screenHeight * 0.04,
    width: screenWidth * 0.08,
    alignSelf: 'center',
  },
});
export default styles;