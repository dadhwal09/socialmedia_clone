import {StyleSheet, Dimensions} from 'react-native';
import {bgColor, textInputColor, textLine} from '../../themes/color';
import {FontFamily} from '../../themes/fontFamily/fontFamliy';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight;
const adjustWidth = screenWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightIcon: {
    resizeMode: 'contain',
    height: 23,
    width: 23,
    left: 100,
    top: 10,
  },
  touchable: {
    flexDirection: 'row',
    width: adjustWidth * 0.3,
    height: adjustedHeight * 0.04,
    left: 10,
    fontFamily: FontFamily.semiBold,
    borderRadius: 14,
    backgroundColor: '#FFFAF1',
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 3,
    shadowRadius: 40,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontFamily: FontFamily.semiBold,
    color: textInputColor.black,
    // justifyContent: 'center',
    // left: 15,
    fontSize: 17,
  },
  icon: {
    height: adjustedHeight * 0.07,
    width: 50,
  },

  dropdownArea: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#FFE6B7',
    // elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    top: 20,
    right: -9.5,
    borderTopRightRadius: 1,
  },
  dropdownArea1: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFE6B7',
    top: 35,
    left: 110,
  },
  interestList: {
    width: adjustWidth * 0.25,
    borderColor: textLine.lineColor,
    borderBottomWidth: 2,
  },
});
export default styles;
