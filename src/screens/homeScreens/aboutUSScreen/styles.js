import { StyleSheet } from "react-native";
import { bgColor, text } from "../../../themes/color";
import { FontFamily } from "../../../themes/fontFamily/fontFamliy";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor.white
    },
    backArrow: {
        right: 110
    },
    text: {
        fontFamily: FontFamily.medium,
        color: text.textColor,
        fontSize: 15,
        margin:20
    }
})
export default styles;