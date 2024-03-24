import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AvtarHome from '../../../components/avtarHomeCustom';
import Spacer from '../../../components/spacer';
import styles from './styles';
import CardCustom from '../../../components/cardCustom';
import HeaderCustom from '../../../components/headerCustom';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const HomeScreen = ({ navigation }, props) => {
  const DataList = [
  ]
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={'Home'}
        styleRight={styles.addImg}
        sourceImg={require('../../../assets/images/addImg.png')}
        onPressRight={() => navigation.navigate('CreatePost')}
      /><Spacer height={adjustHeight * 0.01} />
      <View style={{bottom:20}}>
        <CardCustom />
        <Spacer height={adjustHeight * 0.01} />
        <CardCustom />
        <Spacer height={adjustHeight * 0.01} />
        <CardCustom />
        <Spacer height={adjustHeight * 0.03} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
