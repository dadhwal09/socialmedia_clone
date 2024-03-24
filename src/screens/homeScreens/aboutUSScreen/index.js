import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import HeaderCustom from '../../../components/headerCustom'
import styles from './styles'
import Spacer from '../../../components/spacer';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const AboutUsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer height={screenHeight * 0.01} />
            <HeaderCustom
                text={'About US'}
                source={require('../../../assets/images/backarrow.png')}
                style={styles.backArrow}
                onPress={()=>navigation.navigate('Settings')}
            />
            <Text style={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
    )
}

export default AboutUsScreen