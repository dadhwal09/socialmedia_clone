
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
    height: adjustHeight * 0.37,
    borderRadius: 14,
    backgroundColor: '#FFFAF1',
    shadowColor: '#FF7019',
    // shadowOpacity: 0.5,
    // shadowRadius: 0.5,
    elevation: 10,
    overflow: 'hidden',
  },
  avatarView: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: FontFamily.medium,
    color: text.textColor,
  },
  img: {
    resizeMode: 'contain',
    height: adjustHeight * 0.03,
    width: adjustWidth * 0.1,
  },
  mainImg: {
    resizeMode: 'contain',
    height: adjustHeight * 0.24,
    width: adjustWidth * 0.6,
    marginLeft: 20,
  },
  main1Img: {
    resizeMode: 'contain',
    height: adjustHeight * 0.08,
    width: adjustWidth * 0.16,
    marginLeft: 15,
  },
});
export default styles;
