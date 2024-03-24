import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';
import {text} from '../../themes/color';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#FFB298',
    margin: 10,
  },
  leftImg: {
    resizeMode: 'contain',
    height: screenHeight * 0.04,
    width: screenWidth * 0.08,
    top: 10,
  },
  text: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    fontSize: 20,
    left: 40,
  },
  rightArrow: {
    resizeMode: 'contain',
    height: screenHeight * 0.03,
    width: screenWidth * 0.06,
    left: 100,
  },
});
export default styles;
