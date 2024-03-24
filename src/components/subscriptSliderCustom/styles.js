import { Dimensions, StyleSheet } from 'react-native';
import { dotRow, text, textInputColor, textLine } from '../../themes/color';
const adjustHeight = Dimensions.get('window').height;
const adjustWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  sliderView: {
    // alignSelf: 'center',
    // height: adjustHeight * 0.35,
    // width: (adjustWidth * 93) / 100,
    // elevation: 10,
    // borderRadius: 20,
    // backgroundColor: '#FFFAF1',
    // shadowColor: '#F9774B',
  },
  circle: {
    // top:20,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#FF731D",

  },
});
export default styles;
