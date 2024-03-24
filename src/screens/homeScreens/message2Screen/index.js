import { View, Text, FlatList, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import ImageDropDown from '../../../components/imageDropDown';
import ChatCustom from '../../../components/chatCustom';
import Spacer from '../../../components/spacer';
import HeaderMessageCustom from '../../../components/headerCusto';

const screenHeight = Dimensions.get('window').height;

const MessageChatScreen = ({ navigation }) => {
  // const data = [{
  //   id: 0,
  //   sourceAvatar: require('../../../assets/images/winni2.png'),
  //   textBar: 'Hello,How are you ?',
  //   textTimer: '10/01/2022 06:57 AM'
  // },
  // {
  //   id: 1,
  //   sourceAvatar: require('../../../assets/images/winni2.png'),
  //   textBar: 'Hello,How are you ?',
  //   textTimer: '10/01/2022 06:57 AM'
  // },
  // {
  //   id: 2,
  //   sourceAvatar: require('../../../assets/images/winni2.png'),
  //   textBar: 'Hello,How are you ?',
  //   textTimer: '10/01/2022 06:57 AM'
  // },
  // {
  //   id: 3,
  //   sourceAvatar: require('../../../assets/images/winni2.png'),
  //   textBar: 'Hello,How are you ?',
  //   textTimer: '10/01/2022 06:57 AM'
  // }
  // ]
  // const data2 = [{
  //   id: 0,
  //   sourceAvatar2: require('../../../assets/images/winni.png'),
  //   textBar2: 'Hey',
  //   textTimer2: '10/01/2022 06:57 AM'
  // },
  // ]
  return (
    <View style={styles.container}>
      <Spacer height={screenHeight * 0.01} />
      <HeaderMessageCustom
        source={require('../../../assets/images/backarrow.png')}
        size={55}
        rounded
        sourceAvatar={require('../../../assets/images/winni2.png')}
        textAvatar={'Winni'}
        style={styles.backarrow}
        styleRight={styles.rightIcon}
        onPress={() => navigation.navigate('Message')}
      />
      <View style={styles.rightIcon}>
        <ImageDropDown />
      </View>
      <Spacer height={screenHeight * 0.1} />

      <Text style={styles.text}>Today</Text>

      <Spacer height={screenHeight * 0.2} />
      {/* <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatCustom
            source={item.sourceAvatar}
            textBar={item.textBar}
            textTimer={item.textTimer}
          />
        )} />
      <FlatList
        data={data2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatCustom
            source2={item.sourceAvatar2}
            textBar2={item.textBar2}
            textTimer2={item.textTimer2}
          />
        )} */}
      {/* // // contentContainerStyle={{ left: 150 }} */}

      {/* /> */}
      <ChatCustom />
      <Spacer height={screenHeight * 0.09} />
      <View style={styles.card}>
        <Spacer height={screenHeight * 0.02} />
        <TouchableOpacity
          style={styles.textBar}
          onPress={() => navigation.navigate('Comments')}>
          <TextInput
            placeholder="Write a Comment...."
            style={styles.textinput}
          />
          <TouchableOpacity>
            <Image
              style={styles.sendIcon}
              source={require('../../../assets/images/sendIcon.png')}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageChatScreen;
