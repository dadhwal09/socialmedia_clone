import React, { useState } from 'react';
import { View, Text, TouchableOpacity ,Dimensions} from 'react-native';

import { TextInputCustom } from '../../../components';
import strings from '../../../themes/constants/strings';
import { textInputColor, touchableOpacity ,} from '../../../themes/color';
import { CheckBox } from '@rneui/themed';

import styles from './styles';
import ButtonCustom from '../../../components/buttonCustom';
import Spacer from '../../../components/spacer';
import CheckboxCustom from '../../../components/checkboxCustom';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustedHeight = screenHeight ;
// const adjustWidth = screenWidth * 0.49
const SignUp = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  let checkbox = () => {
    setChecked(true);
  };
  return (
    <View style={styles.container}>
      <Spacer height={adjustedHeight * 0.07} />
      <Text style={styles.text}>SignUp</Text>
      <Spacer height={adjustedHeight * 0.07} />
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
      <Spacer height={adjustedHeight * 0.01} />
      <View style={styles.textInput2}>
        <TextInputCustom
          label={strings.password}
          placeholder={strings.password}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}
        />
      </View>
      <Spacer height={adjustedHeight * 0.01} />
      <View style={styles.textInput3}>
        <TextInputCustom
          label={strings.confirmPassword}
          placeholder={strings.confirmPassword}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}
        />
      </View>
      <Spacer height={adjustedHeight * 0.12} />
      <CheckboxCustom
        onPress={() => {
          navigation.navigate('Terms');
        }}
      />
      <Spacer height={adjustedHeight * 0.01} />
      <ButtonCustom
        title={strings.continue}
        onPress={() => navigation.navigate('ProfileSignUp')}
      />
      <Spacer height={adjustedHeight * 0.03} />
      <Text style={styles.textLine}>
        Get 2 free months when you signup for our annual plan
      </Text>
      <Spacer height={adjustedHeight * 0.11} />
      <View style={styles.loginTouchable}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.touchableText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
