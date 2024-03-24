import { StyleSheet, Dimensions } from 'react-native';
import { buttonOpacity, textInputColor } from '../../themes/color';
import { FontFamily } from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight * 0.07;
const adjustWidth = screenWidth * 0.49

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTouchable: {
    width: adjustWidth,
    height: adjustedHeight,
    borderRadius: 20,
    backgroundColor: buttonOpacity.buttonColor,
    justifyContent: 'center',
    shadowColor: '#FF8032',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 3,
    shadowRadius: 4,
    elevation: 5,
    transform: [{ perspective: 100 }, { rotateX: '1deg' }],
  },
  buttonText: {
    textAlign: 'center',
    color: textInputColor.innerColor,
    fontSize: 24,
    fontWeight: '500',
    fontFamily: FontFamily.medium,
  },
});
export default styles;
