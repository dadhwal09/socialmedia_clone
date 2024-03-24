import {StyleSheet, Dimensions} from 'react-native';
import {touchableOpacity} from '../../themes/color';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  checkView: {
    // left:20
  },
  textView: {
    // borderWidth: 1,
  },
  backtouchble: {
    resizeMode: 'contain',
    height: adjustedHeight * 0.04,
    width: adjustWidth * 0.08,
  },
  touchable: { 
    resizeMode: 'contain',
    height: adjustedHeight * 0.04,
    width: adjustWidth * 0.08,
  },
  touchable2: {
    resizeMode: 'contain',
    height: adjustedHeight * 0.04,
    width: adjustWidth * 0.04,
    left: 8,
  },
  touchableText: {
    fontWeight: '200',
    fontSize: 15,
    fontFamily: FontFamily.semiBold,
    color: touchableOpacity.orange,
    left: 7,
  },
});

export default styles;
