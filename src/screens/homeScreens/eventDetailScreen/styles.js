import { Dimensions, StyleSheet } from 'react-native';
import { bgColor, buttonOpacity, text, textInputColor } from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const adjustHeight = height;
const adjustWidth = width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor.white,
        margin: 'auto',
    },
    backArrow: {
        right: 75
    },
    text: {
        fontFamily: FontFamily.semiBold,
        color: text.textColor,
        fontSize: 19,
        left: 22
    },
    image: {
        height: adjustHeight * 0.25,
        width: (adjustWidth * 95) / 100,
        alignSelf: 'center',
        borderRadius: 10
    },
    text2: {
        fontFamily: FontFamily.medium,
        color: text.textColor,
        textAlign: 'center',
        top: 20,
        right: 130
    },
    text3: {
        fontFamily: FontFamily.medium,
        color: text.textColor,
        textAlign: 'center',
        top: 20,
        fontSize: 16
        // right: 130,
        // left:22
    },
    text4: {
        fontFamily: FontFamily.semiBold,
        color: text.textColor,
        textAlign: 'center',
        fontSize: 20,
        textAlign: 'center',
    },
    textOrange: {
        fontFamily: FontFamily.semiBold,
        color: '#FF7019',
        textAlign: 'center',
        fontSize: 15,
        top: 4,
        left: 50,
    },
    img2: {
        top: 20,
        resizeMode: 'contain',
        height: adjustHeight * 0.025,
        width: adjustWidth * 0.45,
        right: 60,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        left: 22
    },
    buttonTouchable: {
        width: adjustWidth * 0.4,
        height: adjustHeight * 0.08,
        borderRadius: 20,
        backgroundColor: buttonOpacity.buttonColor,
        justifyContent: 'center',
        shadowColor: '#FF8032',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 3,
        shadowRadius: 4,
        elevation: 5,
        transform: [{ perspective: 100 }, { rotateX: '1deg' }],
    },
    buttonText: {
        textAlign: 'center',
        color: textInputColor.innerColor,
        fontSize: 24,
        fontWeight: '500',
        fontFamily: FontFamily.medium,
    },
    imgView: {
        flexDirection: 'row',
        margin: 4,
        bottom: 44,
        alignSelf: 'center'
    },
    imgGrp: {
        height: adjustHeight * 0.14,
        width: adjustWidth * 0.28,
        margin: 8
    },
});
export default styles;
