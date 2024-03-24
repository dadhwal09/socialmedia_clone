import { StyleSheet, Dimensions } from 'react-native';

import { text } from '../../themes/color';
import { FontFamily } from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight * 0.09;
const adjustWidth = screenWidth * 0.07;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backArrow: {
    right: 90,
    resizeMode: 'contain',
    height: 30,
    width: 27,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 31.69,
    // right: 20,
  },
  textAvatar: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 31.69,
    right: 95
  },
  rightIcon: {
    resizeMode: 'contain',
    height: adjustHeight * 0.5,
    width: adjustWidth * 1,
    left: 85,
  },
});
export default styles;

