import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const item = [
  {activity: 'Delete', id: 1},
  {activity: 'Block/Unblock', id: 2},
];
const ImageDropDown = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(item);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsClicked(!isClicked)}>
        <Image
          source={require('../../assets/images/buttonGrid.png')}
          style={styles.rightIcon}
        />
      </TouchableOpacity>
      {isClicked ? (

          <View style={styles.dropdownArea1}>
            <View style={styles.dropdownArea}>
              {data.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.interestList}
                  onPress={() => {
                    setIsClicked(false);
                  }}>
                  <Text>{item.activity}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
      
      ) : null}
    </View>
  );
};

export default ImageDropDown;
