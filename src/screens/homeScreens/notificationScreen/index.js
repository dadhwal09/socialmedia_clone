import { View, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';
import NotificationBarCustom from '../../../components/notificationBarCustom';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const NotificationScreen = ({ navigation }) => {
  const friendsData = [
    {
      id: '1',
      text: 'Friend Request',
      text2: 'Rock has sent you a friend request.',
      text3: '10/01/2022 06:57 AM',
      onPress: () => navigation.navigate('NewMesssage'),
    },
    {
      id: '2',
      text: 'Friend Request',
      text2: 'Rahul has accepted your friend request.',
      text3: '10/01/2022 06:57 AM',
    },
    {
      id: '3',
      text: 'Message from Rahul',
      text2: 'Hey John,How are you ?',
      text3: '10/01/2022 06:57 AM',
    },
    {
      id: '4',
      text: 'Rahul liked your post.',
      text3: '10/01/2022 06:57 AM',
    },
    {
      id: '5',
      text: 'Rahul commented your post.',
      text2: 'Look awesome buddy.?',
      text3: '10/01/2022 06:57 AM',
    },
  ];

  const renderFriendItem = ({ item }) => (
    <View>
      <NotificationBarCustom
        text={item.text}
        text2={item.text2}
        text3={item.text3}
        onPress={item.onPress}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={'Notification'}
        source={require('../../../assets/images/backarrow.png')}
        onPress={() => navigation.navigate('ProfileBottom')}
        style={styles.backArrow}
      />
      <Spacer height={adjustHeight * 0.03} />
      <FlatList
        data={friendsData}
        keyExtractor={item => item.id}
        renderItem={renderFriendItem}
        contentContainerStyle={{ padding: 5 }}
        ItemSeparatorComponent={() => <Spacer height={adjustHeight * 0.01} />}
      />
    </View>
  );
};

export default NotificationScreen;
