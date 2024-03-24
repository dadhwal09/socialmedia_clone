import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;
const adjustedHeight = screenHeight * 0.1 // 10% of screen height

const styles = StyleSheet.create({
    avtar: {
        left: 17,
        // height: adjustedHeight
    }
})
export default styles;