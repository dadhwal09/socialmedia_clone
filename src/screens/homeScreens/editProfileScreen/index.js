import {Avatar} from '@rneui/base';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {bgColor, textInputColor} from '../../../themes/color';
import strings from '../../../themes/constants/strings';
import styles from './styles';
import TextInputCustom from '../../../components/textInputCustom';
import CustomDropdown from '../../../components/customDropDown';
import DescriptionCustom from '../../../components/descriptionInput';
import ButtonCustom from '../../../components/buttonCustom';
import HeaderCustom from '../../../components/headerCustom';
import AvatarCustom from '../../../components/avtarCustom';
import Spacer from '../../../components/spacer';

const screenHeight = Dimensions.get('window').height;
const adjustedHeight = screenHeight;

const EditProfileScreen = ({navigation}) => {
  // const alertFn = () => {
  //   alert('Add');
  // };
  return (
    <ScrollView style={styles.container}>
      <Spacer height={screenHeight * 0.01} />
      <HeaderCustom
        text={'Edit Profile'}
        source={require('../../../assets/images/backarrow.png')}
        style={styles.backArrow}
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Spacer height={screenHeight * 0.02} />
      <View style={{alignSelf: 'center', right: 20}}>
        <AvatarCustom
          size={130}
          rounded
          source={require('../../../assets/images/profileIcon.png')}
        />
      </View>
      <Spacer height={adjustedHeight * 0.01} />
      <View style={styles.textInput1}>
        <TextInputCustom
          label={strings.emailAddress}
          placeholder={strings.fullName}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}
        />
      </View>
      <Spacer height={adjustedHeight * 0.01} />
      <View style={styles.textInput2}>
        <TextInputCustom
          label={strings.dob}
          placeholder={strings.dob}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}
        />
      </View>
      <Spacer height={adjustedHeight * 0.01} />
      <Text style={styles.interestText}>Interest*</Text>
      <Spacer height={adjustedHeight * 0.01} />
      <CustomDropdown />
      <Spacer height={adjustedHeight * 0.01} />
      <View style={styles.textInput3}>
        <TextInputCustom
          label={strings.location}
          placeholder={strings.location}
          maxLength={40}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}Bio* (other users will see this on your profile)
        />
      </View>
      <Spacer height={adjustedHeight * 0.01} />
      <View style={styles.textInput4}>
        <DescriptionCustom
          label={strings.bioText}
          placeholder={strings.bio}
          maxLength={250}
          placeholderTextColor={textInputColor.grey}
          // value={value}
          // onChangeText={onChangeText}Bio* (other users will see this on your profile)
        />
      </View>

      <Spacer height={adjustedHeight * 0.1} />

      <ButtonCustom
        title={'Update'}
        onPress={() => navigation.navigate('ProfileBottom')}
      />
      <Spacer height={adjustedHeight * 0.05} />
    </ScrollView>
  );
};

export default EditProfileScreen;
