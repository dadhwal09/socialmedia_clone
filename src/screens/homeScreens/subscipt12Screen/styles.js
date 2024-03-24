import {StyleSheet, Dimensions} from 'react-native';
import {bgColor} from '../../../themes/color';
import {FontFamily} from '../../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
  },
  // imgArrow: {
  //   // right: 60,
  // },
  // imageView: {
  //   alignSelf: 'center',
  //   height: screenHeight * 0.3,
  //   width: screenWidth * 0.9,
  //   fontFamily: FontFamily.semiBold,
  //   borderRadius: 14,
  //   backgroundColor: '#FFFAF1',
  //   shadowColor: 'red',
  //   shadowOpacity: 3,
  //   shadowRadius: 40,
  //   elevation: 5,
  // },
});
export default styles;
