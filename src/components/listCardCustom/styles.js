import {StyleSheet, Dimensions} from 'react-native';
import {loginColor} from '../../themes/color';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    alignSelf: 'center',
    width: (adjustWidth * 94) / 100,
    height: adjustHeight * 0.11,
    borderRadius: 14,
    backgroundColor: '#FFFAF1',
    shadowColor: '#FF7019',
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 10,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: loginColor.color,
    left: 10,
  },
  text3: {
    fontFamily: FontFamily.semiBold,
    color: loginColor.color,
    left: 150,
  },
  button: {
    padding: 10,
    left: 100,
  },
  button2: {
    padding: 10,
    // left: 5,
  },
  button3: {
    padding: 10,
    right: 15,
  },
});
export default styles;
