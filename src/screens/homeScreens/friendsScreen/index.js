import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderCustom from '../../../components/headerCustom';
import ListCardCustom from '../../../components/listCardCustom';
import SmallButtonCustom from '../../../components/smallButtonCustom';
import Spacer from '../../../components/spacer';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const FriendsScreen = () => {
  const navigation=useNavigation()
  const friendsData = [
    {
      id: '1',
      source: require('../../../assets/images/winni.png'),
      text: 'Winni',
      text2: 'Los Angeles',
      onPress: (() => navigation.navigate('FriendProfile'))
    },
    {
      id: '2',
      source: require('../../../assets/images/winni2.png'),
      text: 'Winni',
      text2: 'Los Angeles',
    },
    {
      id: '3',
      source: require('../../../assets/images/ria2.png'),
      text: 'Ria',
      text2: 'Los Angeles',
    },
    {
      id: '4',
      source: require('../../../assets/images/richa.png'),
      text: 'Richa',
      text2: 'Los Angeles',
    },
    {
      id: '5',
      source: require('../../../assets/images/anjila.png'),
      text: 'Anjila',
      text2: 'Los Angeles',
    },
  ];

  const renderFriendItem = ({ item }) => (
    <View>
      <ListCardCustom
        size={55}
        rounded
        source={item.source}
        text={item.text}
        text2={item.text2}
        onPress={item.onPress}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.02} />
      <HeaderCustom
        style={styles.img}
        text={'Friends'}
        sourceImg={require('../../../assets/images/addFriend.png')}
        onPressRight={() => navigation.navigate('FriendRequest')}
      />
      <Spacer height={adjustHeight * 0.02} />
      <FlatList
        data={friendsData}
        keyExtractor={item => item.id}
        renderItem={renderFriendItem}
        contentContainerStyle={{ padding: 5 }}
        ItemSeparatorComponent={() => <Spacer height={adjustHeight * 0.01} />}
      />
      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.navigate('Search')}>
        <Image
          style={styles.searchImg}
          source={require('../../../assets/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FriendsScreen;
