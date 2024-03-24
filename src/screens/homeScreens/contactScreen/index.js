import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import {TextInputCustom} from '../../../components';
import {textInputColor} from '../../../themes/color';
import strings from '../../../themes/constants/strings';
import ButtonCustom from '../../../components/buttonCustom';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';
import DescriptionCustom from '../../../components/descriptionInput';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer height={screenHeight * 0.01} />
      <HeaderCustom
        text={'Contact US'}
        source={require('../../../assets/images/backarrow.png')}
        style={styles.backArrow}
      />
      <Spacer height={screenHeight * 0.02} />
      <Image
        style={styles.logoLock}
        source={require('../../../assets/images/telecaller.png')}
      />
      <Spacer height={screenHeight * 0.04} />
      <View style={styles.textInput1}>
        <TextInputCustom
          label={strings.emailAddress}
          placeholder={strings.emailAddress}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}
        />
      </View>
      <Spacer height={screenHeight * 0.01} />
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
      <Spacer height={screenHeight * 0.01} />
      <View style={styles.textInput1}>
        <DescriptionCustom
          label={'Description'}
          placeholder={'Description'}
          maxLength={250}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}Bio* (other users will see this on your profile)
        />
      </View>
      <Spacer height={screenHeight * 0.03} />
      <ButtonCustom title={'Send'} />
    </View>
  );
};

export default ContactScreen;
