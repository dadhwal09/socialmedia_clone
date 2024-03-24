import {StyleSheet, Dimensions} from 'react-native';
import {bgColor, text, textLine} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
  },
  calender: {
    height: screenHeight * 0.35,
    width: screenWidth * (90 / 100),
    alignSelf: 'center',
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: '#FF7019',
    fontSize: 17,
    lineHeight: 31.69,
    textAlign: 'center',
    top: 25,
  },
  input: {
    width: '95%',
    height: screenHeight * 0.15,
    fontFamily: FontFamily.semiBold,
    borderRadius: 14,
    backgroundColor: '#FFFAF1',
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 3,
    shadowRadius: 40,
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text2: {
    fontFamily: FontFamily.semiBold,
    color: textLine.lineColor,
    fontSize: 15,
    textAlign: 'center',
  },
  backArrow: {
    right:125
  }
});
export default styles;
