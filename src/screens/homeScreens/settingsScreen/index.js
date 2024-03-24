import { View, Text, FlatList,Dimensions } from 'react-native';
import React from 'react';
import HeaderCustom from '../../../components/headerCustom';
import SettingCustom from '../../../components/settingCustom';
import Spacer from '../../../components/spacer';
import styles from './styles';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const SettingScreen = ({ navigation }) => {
  const setting = [
    {
      id: 1,
      source: require('../../../assets/images/mobile.png'),
      text: 'Contact US',
      rightArrow: require('../../../assets/images/rightArrow.png'),
      onPress: () => navigation.navigate('ContactUs'),
    },
    {
      id: 2,
      source: require('../../../assets/images/info.png'),
      text: 'About US',
      rightArrow: require('../../../assets/images/rightArrow.png'),
      onPress: () => navigation.navigate('AboutUs'),
    },
    {
      id: 3,
      source: require('../../../assets/images/lock.png'),
      text: 'Change Password',
      rightArrow: require('../../../assets/images/rightArrow.png'),
      onPress: () => navigation.navigate('ChangePassword'),
    },
   
    {
      id: 4,
      source: require('../../../assets/images/terms.png'),
      text: 'Terms and Conditions',
      rightArrow: require('../../../assets/images/rightArrow.png'),
      onPress: () => navigation.navigate('Terms'),
    },
    {
      id: 5,
      source: require('../../../assets/images/privacy.png'),
      text: 'Privacy Policy',
      rightArrow: require('../../../assets/images/rightArrow.png'),
      onPress: () => navigation.navigate('Privacy'),
    },
    {
      id: 6,
      source: require('../../../assets/images/block.png'),
      text: 'Blocked Friends',
      rightArrow: require('../../../assets/images/rightArrow.png'),
      onPress: () => navigation.navigate('BlockedFriend'),
    },
    {
      id: 7,
      source: require('../../../assets/images/deleteUser.png'),
      text: 'Delete Account',
      rightArrow: require('../../../assets/images/rightArrow.png'),
    },
    {
      id: 8 ,
      source: require('../../../assets/images/logout.png'),
      text: 'Logout',
      rightArrow: require('../../../assets/images/rightArrow.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={'Settings'}
        source={require('../../../assets/images/backarrow.png')}
        style={styles.backArrow}
      />
      <Spacer height={adjustHeight * 0.03} />
      <FlatList
        data={setting}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SettingCustom
            source={item.source}
            text={item.text}
            rightArrow={item.rightArrow}
            onPress={item.onPress}
          />
        )}
      />
    </View>
  );
};

export default SettingScreen;
