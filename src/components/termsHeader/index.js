import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {bgColor} from '../../themes/color';
import styles from './styles';

const TermsHeader = props => {
  const {onPress, text,OnPressLeft} = props;
  return (
    <View>
      {/* <StatusBar animated={true} barStyle={'light-content'} /> */}
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} onLongPress={OnPressLeft}>
          <Image
            on
            style={styles.backArrow}
            source={require('../../assets/images/backarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default TermsHeader;
