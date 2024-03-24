import { View, Text, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

import { TextInputCustom } from '../../../components';
import { textInputColor } from '../../../themes/color';
import strings from '../../../themes/constants/strings';
import ButtonCustom from '../../../components/buttonCustom';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width

const adjustHeight = screenHeight
// import ModalForgotPassword from '../../../components/modalForgotPass';

const ForgotPassword = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Spacer height={screenHeight * 0.01} />
      {/* <ModalForgotPassword/> */}
      <HeaderCustom
        text={strings.forgotPassword}
        source={require('../../../assets/images/backarrow.png')}
        onPress={() => navigation.navigate('Login')}
        style={styles.backArrow}
      />
      <Spacer height={screenHeight * 0.04} />
      <Image
        style={styles.logoLock}
        source={require('../../../assets/images/locklogo.png')}
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
      <Spacer height={screenHeight * 0.25} />
      <ButtonCustom title={strings.submitButton} />
    </View>
  );
};

export default ForgotPassword;
