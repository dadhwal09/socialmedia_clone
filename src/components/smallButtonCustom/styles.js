import {StyleSheet, Dimensions} from 'react-native';
import {buttonOpacity, textInputColor} from '../../themes/color';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTouchable: {
    borderRadius: 15,
    height: adjustHeight * 0.045,
    width: adjustWidth * 0.22,
    backgroundColor: buttonOpacity.buttonColor,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: textInputColor.innerColor,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: FontFamily.medium,
  },
});
export default styles;
