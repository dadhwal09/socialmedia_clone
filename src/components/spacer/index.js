import { View } from "react-native";
const Spacer = (props) => {
    const {height,width,flex}=props
    return (
        <View style={{height:height,width:width, flex:flex,...props,}}/>
    )
}
export default Spacer;