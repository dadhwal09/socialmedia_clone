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
  },
  backarrow: {
    right: 115,
  },
  rightIcon: {
    left: 280,
    bottom: 60,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 15,
    lineHeight: 31.69,
    textAlign: 'center',
    top: 10,
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
  }
});
export default styles;
