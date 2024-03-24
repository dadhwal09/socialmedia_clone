import {Dimensions, StyleSheet} from 'react-native';
import {bgColor, loginColor, touchableOpacity} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight ;
const adjustWidth = screenWidth;

console.log(screenHeight, screenWidth);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
    margin: 'auto',
    // padding: 'auto',
  },

  logoImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    // width: windowWidth / 2.5,
    height: adjustedHeight * 0.05,
    // marginTop: 43,
  },
  text: {
    // marginTop: 60,
    alignSelf: 'center',
    fontFamily: FontFamily.semiBold,
    color: loginColor.color,
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 31.69,
  },
  textInput1: {
    // marginTop: 50,
    left: 10,
  },
  textInput2: {
    // marginTop:10,
    left: 10,
  },

  touchable: {
    // marginTop:30,
    // left: 129,
    // alignItems: 'center',
    // width: 158,
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
  vectorImage: {
    height: adjustedHeight * 0.045,
    width: adjustWidth * 0.1,
    margin: 20,
    left: 80,
  },
  signUpToucble: {
    flexDirection: 'row',
    color: loginColor.color,
    fontFamily: FontFamily.medium,
    fontSize: 17,
    fontWeight: '500',
    alignSelf: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: loginColor.color,
    fontFamily: FontFamily.medium,
    fontSize: 17,
    fontWeight: '500',
    margin: 5,
  },
});
export default styles;
