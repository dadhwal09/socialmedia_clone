import { StyleSheet, Dimensions } from "react-native";
import { bgColor, text } from "../../themes/color";
import { FontFamily } from "../../themes/fontFamily/fontFamliy";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    chatBar: {
        borderRadius: 14,
        backgroundColor: '#FFD3C3',
        height: screenHeight * 0.07,
        width: screenWidth * 0.5,
        justifyContent: 'center',
        left:20
    },
    textBar: {
        fontFamily: FontFamily.semiBold,
        color: text.textColor,
        left: 10
    },
    textTimer: {
        fontFamily: FontFamily.semiBold,
        color: text.textColor,
        textAlign: 'center',
        fontSize: 10,
        right: 20,
    },
    chatBar2: {
        borderRadius: 14,
        backgroundColor: '#FFD3C3',
        height: screenHeight * 0.07,
        width: screenWidth * 0.35,
        justifyContent: 'center',
    },
    textBar2: {
        fontFamily: FontFamily.semiBold,
        color: text.textColor,
        left: 10
    },
    textTimer2: {
        fontFamily: FontFamily.semiBold,
        color: text.textColor,
        textAlign: 'center',
        fontSize: 10,
        // left: 110,
    },
})
export default styles