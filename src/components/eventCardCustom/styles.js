import { Dimensions, StyleSheet } from 'react-native';
import { text } from '../../themes/color';
import { FontFamily } from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: (adjustWidth * 90) / 100,
    height: adjustHeight * 0.4,
    borderRadius: 14,
    elevation: 10,
    backgroundColor: '#FFFAF1',
    shadowColor: '#FF7019',
    overflow: 'hidden',
  },
  text: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '690',
    top: 10,
  },
  text2: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
    textAlign: 'center',
    top: 20,
    right: 130
  },
  img: {
    top: 15,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: adjustHeight * 0.2,
    width: adjustWidth * (85 / 100),
  },
  img2: {
    top: 20,
    resizeMode: 'contain',
    height: adjustHeight * 0.025,
    width: adjustWidth * 0.45,
    right: 60,
  },
  main1Img: {
    resizeMode: 'contain',
    height: adjustHeight * 0.08,
    width: adjustWidth * 0.16,
    marginLeft: 15,
  },
});
export default styles;
