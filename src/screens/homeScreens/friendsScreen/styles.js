import {StyleSheet, Dimensions} from 'react-native';
import {bgColor, loginColor} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
    alignItems:'center'
  },
  text: {
    alignSelf: 'center',
    fontFamily: FontFamily.semiBold,
    color: loginColor.color,
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 31.69,
  },
  img: {
    resizeMode: 'contain',
    height: adjustHeight * 0.04,
    width: adjustWidth * 0.08,
    left: 100,
  },
  circle: {
    height: adjustHeight * 0.09,
    width: adjustWidth * 0.2,
    borderRadius: (adjustHeight + adjustWidth) / 2,
    backgroundColor: '#FFFAF1',
    shadowColor: '#FF7019',
    elevation:10,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  searchImg: {
    resizeMode: 'contain',
    height: adjustHeight * 0.09,
    width: adjustWidth * 0.12,
    alignSelf: 'center',
  },
});
export default styles;
