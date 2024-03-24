import {StyleSheet, Dimensions} from 'react-native';
import {bgColor, text} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

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
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontWeight: '600',
    fontSize: 15,
  },
  text1: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    bottom: 4,
  },
  textLine: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    marginLeft: 80,
    bottom: 20,
    height: adjustHeight * 0.15,
    width: (adjustWidth * 70) / 100,
    fontSize: 15,
  },

  inputView: {
    flexDirection: 'row',
    bottom: 20,
  },
  input: {
    bottom: 20,
    marginLeft: 15,
    height: adjustHeight * 0.02,
    width: (adjustWidth * 80) / 100,
  },
  image: {
    height: adjustHeight * 0.09,
    width: (adjustWidth * 18) / 100,
    right: 15,
  },
  textLine2: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    marginLeft: 80,
    bottom: 35,
    height: adjustHeight * 0.15,
    width: (adjustWidth * 70) / 100,
    fontSize: 15,
  },
  textLine3: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    height: adjustHeight * 0.08,
    width: (adjustWidth * 50) / 100,
    fontSize: 13,
    bottom: 5,
  },
  card: {
    bottom: 25,
    borderRadius: 10,
    height: adjustHeight * 0.1,
    backgroundColor: '#FFFAF1',
    // shadowColor: '#F87C52',
    elevation: 20,
    // shadowRadius: 5,
    // transform: [ {rotate: '180deg'}],
  },
  textBar: {
    borderColor: '#FF7019',
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    height: adjustHeight * 0.055,
    width: adjustWidth * 0.95,
    flexDirection: 'row',
  },
  textinput: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    left: 5,
  },
  sendIcon: {
    height: adjustHeight * 0.03,
    width: adjustWidth * 0.06,
    left: 200,
    top: 7,
  },
});
export default styles;
