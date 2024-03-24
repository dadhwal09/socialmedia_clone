import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import SearchInputCustom from '../../../components/searchInputCustom';
import Spacer from '../../../components/spacer';
import ListCardCustom from '../../../components/listCardCustom';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const MessageScreen = ({navigation}) => {
  const friendsData = [
    {
      id: '1',
      source: require('../../../assets/images/winni.png'),
      text: 'Winni',
      text2: 'Hi charlotte how are you',
      text3: '10/01/2022 06:57 AM',
      onPress: () => navigation.navigate('NewMesssage'),
    },
    {
      id: '2',
      source: require('../../../assets/images/winni2.png'),
      text: 'Winni',
      text2: 'Hi charlotte how are you',
      text3: '10/01/2022 06:57 AM',
    },
    {
      id: '3',
      source: require('../../../assets/images/ria2.png'),
      text: 'Ria',
      text2: 'Hi charlotte how are you',
      text3: '10/01/2022 06:57 AM',
    },
    {
      id: '4',
      source: require('../../../assets/images/richa.png'),
      text: 'Richa',
      text2: 'Hi charlotte how are you',
      text3: '10/01/2022 06:57 AM',
    },
  ];

  const renderFriendItem = ({item}) => (
    <View>
      <ListCardCustom
        size={55}
        rounded
        source={item.source}
        text={item.text}
        text2={item.text2}
        text3={item.text3}
        onPress={item.onPress}
      />
    </View>
  );
  return (
    <View style={styles.container}><Spacer height={adjustHeight * 0.02} />
      <HeaderCustom
        text={'Messages'}
        sourceImg={require('../../../assets/images/messageIcon.png')}
        onPressRight={() => navigation.navigate('ChatMessage')}
        style={styles.messIcon}
      />
      <View style={styles.bar}>
        <SearchInputCustom
          placeholder={'Search'}
          source={require('../../../assets/images/search.png')}
        />
      </View>
      <FlatList
        data={friendsData}
        keyExtractor={item => item.id}
        renderItem={renderFriendItem}
        contentContainerStyle={{padding: 5}}
        ItemSeparatorComponent={() => <Spacer height={adjustHeight * 0.01} />}
      />
    </View>
  );
};

export default MessageScreen;
