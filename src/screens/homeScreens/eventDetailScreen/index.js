import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import HeaderCustom from '../../../components/headerCustom'
import Spacer from '../../../components/spacer'
import ButtonCustom from '../../../components/buttonCustom'

const screenHeight = Dimensions.get('window').height;

const EventDetailScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Spacer height={screenHeight * 0.01} />
            <HeaderCustom
                text={'Events Details'}
                source={require('../../../assets/images/backarrow.png')}
                style={styles.backArrow}
                onPress={() => navigation.navigate('Events')}
            />
            <Spacer height={screenHeight * 0.02} />
            <Image
                source={require('../../../assets/images/event2.png')}
                style={styles.image}
            />
            <Spacer height={screenHeight * 0.02} />
            {/* <View> */}
            <Text style={styles.text}>Event Name</Text><View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../../assets/images/location.png')}
                    style={styles.img2}
                />
                <Text style={styles.text2}>{'47W 13th St,New York,NY 10011,USA'}</Text>
            </View>
            <Spacer height={screenHeight * 0.01} />
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/images/date.png')}
                    style={styles.img2}
                />
                <Text style={styles.text2}>{'Event Start Date: 20 June 2022'}</Text>
            </View>
            <Spacer height={screenHeight * 0.01} />
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/images/time.png')}
                    style={styles.img2}
                />
                <Text style={styles.text2}>{'Event Start Time: 08:00 PM '}</Text>
            </View>
            <Spacer height={screenHeight * 0.01} />
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../../assets/images/date.png')}
                    style={styles.img2}
                />
                <Text style={styles.text2}>{'Event End Date: 21 June 2022'}</Text>
            </View>
            <Spacer height={screenHeight * 0.01} />
            <Text style={styles.text3}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  of type and scrambled it to make a ty. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
            <Spacer height={screenHeight * 0.06} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonTouchable} >
                        <Text style={styles.buttonText}>{'Going'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonTouchable} >
                        <Text style={styles.buttonText}>{'Not Going'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Spacer height={screenHeight * 0.06} />
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={styles.text4}>Event Participants</Text>
                <Text style={styles.textOrange}>+More</Text>
            </View>
            {/* </View> */}
            <Spacer height={screenHeight * 0.08} />
            <View style={styles.imgView}>
                <Image
                    source={require('../../../assets/images/pic1.png')}
                    style={styles.imgGrp}
                />
                <Image
                    source={require('../../../assets/images/pic2.png')}
                    style={styles.imgGrp}
                />
                <Image
                    source={require('../../../assets/images/pic3.png')}
                    style={styles.imgGrp}
                />
            </View>
            <View style={styles.imgView}>
                <Image
                    source={require('../../../assets/images/pic4.png')}
                    style={styles.imgGrp}
                />
                <Image
                    source={require('../../../assets/images/pic5.png')}
                    style={styles.imgGrp}
                />
                <Image
                    source={require('../../../assets/images/pic6.png')}
                    style={styles.imgGrp}
                />
            </View>
        </ScrollView>
    )
}

export default EventDetailScreen