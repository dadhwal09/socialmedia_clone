import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import HeaderCustom from '../../../components/headerCustom';
import styles from './styles';

import HeaderCusto from '../../../components/headerCusto';

const screenHeight = Dimensions.get('window').height;

const Subscription12Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderCustom
        text={'Subscription'}
        source={require('../../../assets/images/backarrow.png')}
        // style={styles.imgArrow}
        sourceImg={require('../../../assets/images/addImage.png')}
        size={35}
        sourceAvatar={require('../../../assets/images/addImage.png')}
      />
      {/* <Spacer height={screenHeight * 0.04} /> */}
      {/* <SubScriptSliderCustom /> */}
      {/* <Spacer height={screenHeight * 0.06} /> */}
      {/* <ButtonCustom
        title={'Join Now'}
        onPress={() => navigation.navigate('SubscriptDetail')}
      /> */}
    </View>
  );
};

export default Subscription12Screen;
