import { View, Text } from 'react-native'
import React from 'react'
import HeaderCustom from '../../../components/headerCustom';
import styles from './styles';

const SubscriptionDetailScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderCustom
        text={'Subscription'}
        source={require('../../../assets/images/backarrow.png')}
        style={styles.imgArrow}
      />
    </View>
  );
};

export default SubscriptionDetailScreen;