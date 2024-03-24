import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import SearchInputCustom from '../../../components/searchInputCustom';
import Spacer from '../../../components/spacer';
import ListCardCustom from '../../../components/listCardCustom';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const NewMessageScreen = ({navigation}) => {
  const friendsData = [
    {
      id: '1',
      source: require('../../../assets/images/winni.png'),
      text: 'Winni',
      text2: 'Los Angeles',
        // onPress: () => navigation.navigate('Message'),
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
  ];

  const renderFriendItem = ({item}) => (
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
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={'New Message'}
        style={styles.backArrow}
        source={require('../../../assets/images/backarrow.png')}
        onPress={() => navigation.navigate('Message')}
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

export default NewMessageScreen;
