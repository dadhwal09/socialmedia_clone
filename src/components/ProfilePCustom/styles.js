import { Dimensions, StyleSheet } from 'react-native';
import { bgColor, text } from '../../themes/color';
import { FontFamily } from '../../themes/fontFamily/fontFamliy';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const screenHeight = height;
const screenWidth = width;

const styles = StyleSheet.create({
  imgView: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 30,
  },
  insideImgView: {
    flexDirection: 'column', 
  },
  img: {
    resizeMode: 'cover',
    margin: 25,
    top: 20,
    height: screenHeight * 0.05,
    width: screenWidth * 0.1,
  },
  imgWinni: {
    resizeMode: 'cover',
    margin: 25,
    height: 120,
    width: 120,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    bottom: 20
  },
  text2: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    left: 5,
    bottom: 20
  },
  text20: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    left: 20,
  },
  textWinni: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    marginLeft:5,
    fontSize: 20,
    bottom: 15,
    alignSelf:'center'
  },
  textCharl: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 20,
    top:30
  },
  textLos: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 16,
    bottom:15
  },
  text20: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    // fontSize: 13,
    left: 38,
  },
});
export default styles;
