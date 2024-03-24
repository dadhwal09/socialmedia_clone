import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

import { TextInputCustom } from '../../../components';
import { textInputColor } from '../../../themes/color';
import strings from '../../../themes/constants/strings';
import ButtonCustom from '../../../components/buttonCustom';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;

const ChangePasswordScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer height={screenHeight * 0.01} />
            <HeaderCustom
                text={'Change Password'}
                source={require('../../../assets/images/backarrow.png')}
                style={styles.backArrow}
                onPress={()=>navigation.navigate('Settings')}
            />
            <Spacer height={screenHeight * 0.02} />
            <Image
                style={styles.logoLock}
                source={require('../../../assets/images/changePassword.png')}
            />
            <Spacer height={screenHeight * 0.04} />
            <View style={styles.textInput1}>
                <TextInputCustom
                    label={'New Password'}
                    placeholder={'New Password'}
                    maxLength={40}
                    placeholderTextColor={textInputColor.grey}
                // value={value}
                // onChangeText={onChangeText}
                />
            </View>
            <Spacer height={screenHeight * 0.02} />
            <View style={styles.textInput1}>
                <TextInputCustom
                    label={'Subject'}
                    placeholder={'Subject'}
                    maxLength={40}
                    placeholderTextColor={textInputColor.grey}
                // value={value}
                // onChangeText={onChangeText}
                />
            </View>
            <Spacer height={screenHeight * 0.02} />
            <View style={styles.textInput1}>
                <TextInputCustom
                    label={'Confirm New Password'}
                    placeholder={'Confirm New Password'}

                    placeholderTextColor={textInputColor.grey}
                // value={value}
                // onChangeText={onChangeText}Bio* (other users will see this on your profile)
                />
            </View>
            <Spacer height={screenHeight * 0.1  } />
            <ButtonCustom title={'Update'} />
        </View>
    );
};

export default ChangePasswordScreen;
