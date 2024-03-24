import {Dimensions, StyleSheet} from 'react-native';
import {bgColor, buttonOpacity, textInputColor} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const adjustHeight = height;
const adjustWidth = width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
    alignItems: 'center',
  },
  imgArrow: {
    right: 70,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: adjustHeight * 0.06,
    width: (adjustWidth * 95) / 100,
    backgroundColor: '#FFFAF1',
    shadowColor: '#F87C52',
    elevation: 10,
  },
  // button: {
  //   borderRadius: 10,
  //   alignSelf: 'center',
  //   alignContent:'center',
  //   height: adjustHeight * 0.06,
  //   width: adjustWidth * 0.45,
  //   backgroundColor: buttonOpacity.buttonColor,
  //   justifyContent: 'center',
  // },
  text: {
    textAlign: 'center',
    color: textInputColor.black,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FontFamily.semiBold,
  },
});
export default styles;
