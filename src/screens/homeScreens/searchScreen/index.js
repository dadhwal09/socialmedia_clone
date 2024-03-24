import { View, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import HeaderCustom from '../../../components/headerCustom';
import strings from '../../../themes/constants/strings';
import styles from './styles';
import SearchInputCustom from '../../../components/searchInputCustom';
import { textInputColor } from '../../../themes/color';
import MiniDropdown from '../../../components/miniDropdown';
import Spacer from '../../../components/spacer';
import ListCardCustom from '../../../components/listCardCustom';
import SmallButtonCustom from '../../../components/smallButtonCustom';

const adjustHeight = Dimensions.get('window').height;

const SearchScreen = ({ navigation }) => {
  const data = [
    {
      id: '1',
      source: require('../../../assets/images/winni.png'),
      text: 'Winni',
      text2: 'Los Angeles',
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
      source: require('../../../assets/images/evlyn.png'),
      text: 'Evlyn',
      text2: 'Los Angeles',
    },
  ];

  const renderItem = ({ item }) => (
    <ListCardCustom
      size={55}
      rounded
      source={item.source}
      text={item.text}
      text2={item.text2}
      SmallButtonCustom1={<SmallButtonCustom title={'Add Friend'} />}
    />
  );

  return (
    <View style={styles.container}>
      <HeaderCustom
        text={strings.search}
        source={require('../../../assets/images/backarrow.png')}
        style={styles.imgArrow}
        onPress={() => navigation.navigate('Friends')}
      />
      <View style={styles.input}>
        <SearchInputCustom
          placeholder={strings.search}
          placeholderTextColor={textInputColor.black}
          source={require('../../../assets/images/search.png')}
        />
      </View>
      <Spacer height={adjustHeight * 0.02} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>Search By</Text>
        <View style={{ left: 180 }}>
          <MiniDropdown />
        </View>
      </View>
      <Spacer height={adjustHeight * 0.04} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default SearchScreen;
