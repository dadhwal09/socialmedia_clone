import {StyleSheet, Dimensions} from 'react-native';

import {text} from '../../themes/color';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight * 0.09;
const adjustWidth = screenWidth * 0.07;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent:'center'
  },
  backArrow: {
    right: 30,
    resizeMode: 'contain',
    height: adjustHeight,
    width: adjustWidth,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 31.69,
  },
});
export default styles;
