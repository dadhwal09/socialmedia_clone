import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';
import ProfilePScreen from '../../../components/ProfilePCustom';

const screenHeight = Dimensions.get('window').height;
const adjustHeight = screenHeight;

const ProfileBottomScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.02} />
      <HeaderCustom
        style={styles.arrow}
        text={'Profile'}
        source={require('../../../assets/images/pen.png')}
        onPress={() => navigation.navigate('EditProfile')}
        sourceImg={require('../../../assets/images/setting.png')}
        onPressRight={() => navigation.navigate('Settings')}
        styleRight={styles.styleRight}
      />
      <ProfilePScreen
        source={require('../../../assets/images/addPeople.png')}
        text20={'20'}
        source2={require('../../../assets/images/profileIcon.png')}
        text3={'Charlotte'}
        textLos={'Los Angeles,California'}
        source3={require('../../../assets/images/20Pro.png')}
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
        <TouchableOpacity onPress={() => navigation.navigate('PostProfile')}>
          <Image
            source={require('../../../assets/images/profile1.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PostProfile')}>
          <Image
            source={require('../../../assets/images/profile2.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PostProfile')}>
          <Image
            source={require('../../../assets/images/profile3.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imgView}>
        <TouchableOpacity onPress={() => navigation.navigate('PostProfile')}>
          <Image
            source={require('../../../assets/images/profile4.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PostProfile')}>
          <Image
            source={require('../../../assets/images/profile5.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PostProfile')}>
          <Image
            source={require('../../../assets/images/profile6.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textMore}>+More</Text>
      </View>
      {/* <Spacer height={adjustHeight * 0.03} /> */}

      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.navigate('Notification')}>
        <Image
          style={styles.searchImg}
          source={require('../../../assets/images/notification.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBottomScreen;
