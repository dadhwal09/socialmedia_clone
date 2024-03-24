import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import styles from '../loginScreen/styles';
import {TextInputCustom} from '../../../components';
import strings from '../../../themes/constants/strings';
import {textInputColor, touchableOpacity} from '../../../themes/color';

import ButtonCustom from '../../../components/buttonCustom';
import Spacer from '../../../components/spacer';
import {spacing} from '../../../themes/constants/spacing';
import CheckboxCustom from '../../../components/checkboxCustom';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight;

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer height={adjustedHeight * 0.05} />
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Spacer height={adjustedHeight * 0.08} />
      <Text style={[styles.text]}>Login</Text>
      <Spacer height={adjustedHeight * 0.08} />
      <View style={styles.textInput1}>
        <TextInputCustom
          label={'Email Address'}
          placeholder={strings.emailAddress}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}
        />
      </View>
      <Spacer height={adjustedHeight * 0.01} />
      <View style={styles.textInput2}>
        <TextInputCustom
          label={'Password'}
          placeholder={strings.password}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          secureTextEntry={true}
        />
      </View>
      <Spacer height={adjustedHeight * 0.02} />
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('ForgotPass')}>
        <Text style={styles.touchableText}>Forgot Password ?</Text>
      </TouchableOpacity>
      <Spacer height={adjustedHeight * 0.07} />
      <CheckboxCustom
        onPress={() => {
          navigation.navigate('Terms');
        }}
      />
      <View style={{flex: 1,paddingBottom:10}}>
        <Spacer height={adjustedHeight * 0.01} />
        <ButtonCustom
          title={strings.loginButton}
          onPress={() => navigation.navigate('Bottom')}
        />
        <Spacer flex={1} />
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.vectorImage}
            source={require('../../../assets/images/facebooklogo.png')}
          />
          <Image
            style={styles.vectorImage}
            source={require('../../../assets/images/applelogo.png')}
          />
          <Image
            style={styles.vectorImage}
            source={require('../../../assets/images/googlelogo.png')}
          />
        </View>
        <Spacer flex={1} />
        <View style={styles.signUpToucble}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.touchableText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
