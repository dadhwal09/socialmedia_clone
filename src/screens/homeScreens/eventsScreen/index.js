import {
  View,
  Text,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  FlatList, ScrollView
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';
import ButtonCustom from '../../../components/buttonCustom';
import EventCardCustom from '../../../components/eventCardCustom';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

const EventScreen = () => {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(true);
  function onChangeHandler() {
    setIsClicked(!isClicked);
  }

  const data = [
    {
      id: 0,
      text: 'Event Name',
      source: (require('../../../assets/images/event1.png')),
      source1: (require('../../../assets/images/date.png')),
      text2: ' 20 June 2022',
      source2: (require('../../../assets/images/time.png')),
      text3: ' 08:00 PM ',
      source3: (require('../../../assets/images/location.png')),
      text4: '47W 13th St,New York,NY 10011,USA',
    },
    {
      id: 1,
      text: 'Event Name',
      source: (require('../../../assets/images/cake50.png')),
      source1: (require('../../../assets/images/date.png')),
      text2: ' 20 June 2022',
      source2: (require('../../../assets/images/time.png')),
      text3: ' 08:00 PM ',
      source3: (require('../../../assets/images/location.png')),
      text4: '47W 13th St,New York,NY 10011,USA',
    }
  ]

  return (
    <View style={styles.container}>
      <Spacer height={screenHeight * 0.01} />
      {isClicked ? (
        <View>
          <HeaderCustom text={'Calendar of Events'} />
          <TouchableOpacity onPress={onChangeHandler}>
            <Text style={styles.text}>August 2023</Text>
            <Image
              source={require('../../../assets/images/calender.png')}
              style={styles.calender}
            />
          </TouchableOpacity>
          <Spacer height={screenHeight * 0.05} />
          <TouchableOpacity
            style={styles.input}
            onPress={() => navigation.navigate('ChatMessage')}>
            <Text style={styles.text2}>
              Enjoy access to all social events, meet new friends, have fun, and
              create great memories. Join Frendii, a social club for women over
              50.
            </Text>
          </TouchableOpacity>
          <Spacer height={screenHeight * 0.05} />
          <ButtonCustom title={'Join Now'} />
        </View>
      ) : (

        <ScrollView style={styles.container}>
          <HeaderCustom
            source={require('../../../assets/images/backarrow.png')}
            text={'Events'}
            style={styles.backArrow}
            onPress={onChangeHandler}
          />
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <EventCardCustom
                text={item.text}
                source={item.source}
                text2={item.text2}
                source1={item.source1}
                text3={item.text3}
                source2={item.source2}
                text4={item.text4}
                source3={item.source3}
                onPress={() => navigation.navigate('EventDetail')}
              />
            )}
            contentContainerStyle={{ padding: 15 }}
            ItemSeparatorComponent={() => <Spacer height={screenHeight * 0.02} />}
          />
        </ScrollView>

      )}
    </View>
  );
};

export default EventScreen;
