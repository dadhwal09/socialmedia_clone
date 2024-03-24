import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
  FlatList,
} from 'react-native';
import ButtonCustom from '../../../components/buttonCustom';
import HeaderCustom from '../../../components/headerCustom';
import ListCardCustom from '../../../components/listCardCustom';
import SmallButtonCustom from '../../../components/smallButtonCustom';
import Spacer from '../../../components/spacer';
import { buttonOpacity } from '../../../themes/color';
import styles from './styles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const adjustHeight = height;
const adjustWidth = width;


const RequestSent = () => {
  const navigation = useNavigation();
  const friendsData = [
    {
      id: '1',
      source: require('../../../assets/images/winni.png'),
      text: 'Winni',
      text2: 'Los Angeles',
      onPress: () => navigation.navigate('FriendProfile'),
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
  return (
    <View>
      <Spacer height={adjustHeight * 0.01} />
      <FlatList
        data={friendsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListCardCustom
            size={55}
            rounded
            source={item.source}
            text={item.text}
            text2={item.text2}
            SmallButtonCustom1={<SmallButtonCustom title={'Cancel'} />}
            onPress={item.onPress}
          />
        )}
        contentContainerStyle={{ padding: 15 }}
        ItemSeparatorComponent={() => <Spacer height={adjustHeight * 0.01} />}
      />
    </View>
  );
};

const RequestReceived = () => {
  const friendsData = [
    {
      id: '1',
      source: require('../../../assets/images/winni.png'),
      text: 'Winni',
      text2: 'Los Angeles',
      // onPress: () => navigation.navigate('FriendProfile'),
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
  return (
    <View>
      <Spacer height={adjustHeight * 0.01} />
      <FlatList
        data={friendsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListCardCustom
            size={55}
            rounded
            source={item.source}
            text={item.text}
            text2={item.text2}
            SmallButtonCustom2={<SmallButtonCustom title={'Accept'} />}
            SmallButtonCustom3={<SmallButtonCustom title={'Reject'} />}
          />
        )}
        contentContainerStyle={{ padding: 15 }}
        ItemSeparatorComponent={() => <Spacer height={adjustHeight * 0.01} />}
      />
    </View>
  );
};

const FriendRequestScreen = ({ navigation }) => {
  const [isClicked, setIsClicked] = useState(0);
  function onChangeHandler(index) {
    setIsClicked(index);
  }

  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        style={styles.imgArrow}
        source={require('../../../assets/images/backarrow.png')}
        text={'Friend Request'}
        onPress={() => navigation.navigate('Friends')}
      />
      <Spacer height={adjustHeight * 0.02} />
      <View style={styles.bar}>
        <TouchableOpacity
          style={[
            isClicked === 0
              ? {
                borderRadius: 10,
                alignSelf: 'center',
                alignContent: 'center',
                height: adjustHeight * 0.06,
                width: adjustWidth * 0.48,
                backgroundColor: buttonOpacity.buttonColor,
                justifyContent: 'center',
              }
              : {
                borderRadius: 10,
                alignSelf: 'center',
                alignContent: 'center',
                height: adjustHeight * 0.06,
                width: adjustWidth * 0.48,
                backgroundColor: 'white',
                justifyContent: 'center',
              },
          ]}
          onPress={() => {
            onChangeHandler(0);
          }}>
          <Text style={styles.text}>Request Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            isClicked === 1
              ? {
                borderRadius: 10,
                alignSelf: 'center',
                alignContent: 'center',
                height: adjustHeight * 0.06,
                width: adjustWidth * 0.48,
                backgroundColor: buttonOpacity.buttonColor,
                justifyContent: 'center',
              }
              : {
                borderRadius: 10,
                alignSelf: 'center',
                alignContent: 'center',
                height: adjustHeight * 0.06,
                width: adjustWidth * 0.48,
                backgroundColor: 'white',
                justifyContent: 'center',
              },
          ]}
          onPress={() => {
            onChangeHandler(1);
          }}>
          <Text style={styles.text}>Request Received</Text>
        </TouchableOpacity>
      </View>
      {isClicked === 0 && <RequestSent />}
      {isClicked === 1 && <RequestReceived />}
    </View>
  );
};

export default FriendRequestScreen;
