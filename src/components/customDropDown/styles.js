import { StyleSheet, Dimensions } from 'react-native';
import { bgColor, textLine } from '../../themes/color';
import { FontFamily } from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight; 
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flexDirection: 'row',
    width: adjustWidth*0.95,
    left: 10,
    height: adjustedHeight * 0.07,
    fontFamily: FontFamily.semiBold,
    borderRadius: 14,
    backgroundColor: '#FFFAF1',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 40,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    // justifyContent: 'center',
    // left: 15,
    fontSize: 17,
  },
  icon: {
    height: adjustedHeight * 0.07,
    width: 50,
  },
  dropdownArea: {
    width: adjustWidth * 0.95,
    borderRadius: 10,
    height: adjustedHeight * 0.26,
    backgroundColor: '#FFE6B7',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 40,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    left: 10,
  },
  interestList: {
    width: adjustWidth * 0.85,
    borderBottomWidth: 2,
    borderColor: textLine.lineColor,
  },
});
export default styles;
