import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import styles from './styles';
import Spacer from '../spacer';

const screenHeight = Dimensions.get('window').height;
const adjustedHeight = screenHeight;

const InterestedItem = [
    { activity: 'City', id: 0 },
    { activity: 'Interest', id: 1 },

];

const MiniDropdown = () => {
    const [selectInterest, setSelectInterest] = useState('Name');
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState(InterestedItem);

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.touchable}
                onPress={() => setIsClicked(!isClicked)}
            >
                <Text style={styles.text} >{selectInterest}</Text>
                <Spacer height={adjustedHeight * 0.3} />
                {isClicked ? (
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/uparrow.png')}
                    />
                ) : (
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/downarrow.png')}
                    />
                )}
            </TouchableOpacity>
            {isClicked ? (
                <View style={styles.dropdownArea}>
                    {data.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.interestList}
                            onPress={() => {
                                setSelectInterest(item.activity);
                                setIsClicked(false);
                            }}>
                            <Text>{item.activity}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ) : null}
        </View>
    );
};

export default MiniDropdown;
