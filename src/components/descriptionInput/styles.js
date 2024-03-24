import { StyleSheet, Dimensions } from 'react-native';
import { text, textInputColor } from '../../themes/color';
import { FontFamily } from '../../themes/fontFamily/fontFamliy';
const screenHeight = Dimensions.get('window').height;
const adjustedHeight = screenHeight * 0.2; // 10% of screen height

const styles = StyleSheet.create({
  inputContainer: {
    gap: 3
  },
  descInput: {
    width: '95%',
    height: adjustedHeight,
    fontFamily: FontFamily.semiBold,
    borderRadius: 14,
    backgroundColor: '#FFFAF1',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 40,
    elevation: 5,
  },
  bioText: {
    // left: 10,
    fontFamily: FontFamily.semiBold,
    color: text.textColor,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20.72,
  },
});
export default styles;
