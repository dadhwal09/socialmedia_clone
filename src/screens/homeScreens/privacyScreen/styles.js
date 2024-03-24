import { StyleSheet, Dimensions } from 'react-native';
import { bgColor, loginColor, text } from '../../../themes/color';
import { FontFamily } from '../../../themes/fontFamily/fontFamliy';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 'auto',
        backgroundColor: bgColor.white,
    },
    text: {
        fontFamily: FontFamily.medium,
        color: text.textColor,
        fontSize: 14,
        margin: 20
    },
    backArrow: {
        right:120
    }
});
export default styles;
