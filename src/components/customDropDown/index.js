import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import styles from './styles';
import Spacer from '../spacer';

const screenHeight = Dimensions.get('window').height;
const adjustedHeight = screenHeight;

const InterestedItem = [
  {activity: 'Walking', id: 0},
  {activity: 'Dinning', id: 1},
  {activity: 'Movies', id: 2},
  {activity: 'Theatre', id: 3},
];

const CustomDropdown = props => {
  const {text} = props;
  const [selectInterest, setSelectInterest] = useState('Select Interest');
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(InterestedItem);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setIsClicked(!isClicked)}>
        <Text style={styles.text}>{selectInterest}</Text>
        <Spacer height={adjustedHeight * 0.3} />
        {isClicked ? (
          <Image
            style={styles.icon}
            source={require('../../assets/images/uparrow.png')}
          />
        ) : (
          <Image
            style={styles.icon}
            source={require('../../assets/images/downarrow.png')}
          />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropdownArea}>
          {data.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.interestList}
              onPress={() => {
                setSelectInterest(item.activity);
                setIsClicked(false);
              }}>
              <Text>{item.activity}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropdown;
