import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';
import ProfilePScreen from '../../../components/ProfilePCustom';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const FriendsProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={'Profile'}
        source={require('../../../assets/images/backarrow.png')}
        style={styles.arrow}
        onPress={() => navigation.navigate('Friends')}
      />
      <ProfilePScreen
        source={require('../../../assets/images/build.png')}
        text={'Los Angeles'}
        text2={'California'}
        source2={require('../../../assets/images/winni.png')}
        text3={'Winni'}
        source3={require('../../../assets/images/agelogo.png')}
        text4={'20'}
      />
      <Text style={styles.textWinni}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </Text>
      {/* <Spacer height={adjustHeight * 0.01} /> */}
      <View style={{flexDirection: 'column'}}>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Walking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Dinning</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Theatre</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnView2}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Sketching</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.text}>Photography</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Dancing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnView3}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Camping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}>
            <Text style={styles.text}>Blog Writing</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Spacer height={adjustHeight * 0.01} /> */}
      <View style={styles.imgView}>
        <Image
          source={require('../../../assets/images/row1.png')}
          style={styles.img}
        />
        <Image
          source={require('../../../assets/images/row2.png')}
          style={styles.img}
        />
        <Image
          source={require('../../../assets/images/row3.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.imgView}>
        <Image
          source={require('../../../assets/images/row4.png')}
          style={styles.img}
        />
        <Image
          source={require('../../../assets/images/row5.png')}
          style={styles.img}
        />
        <Image
          source={require('../../../assets/images/row6.png')}
          style={styles.img}
        />
      </View>
      <View>
        <Text style={styles.textMore}>+More</Text>
      </View>
    </View>
  );
};

export default FriendsProfile;
