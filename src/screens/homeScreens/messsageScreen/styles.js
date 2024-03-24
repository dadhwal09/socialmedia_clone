import {StyleSheet} from 'react-native';
import {bgColor} from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.white,
  },
 
  bar: {
    left: 10,
    fontFamily: FontFamily.semiBold,
    bottom:15
  },
});
export default styles;
