import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import Spacer from '../../../components/spacer';
import {Avatar} from '@rneui/base';
import TextInputCustom from '../../../components/textInputCustom';
import strings from '../../../themes/constants/strings';
import {textInputColor} from '../../../themes/color';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const adjustHeight = screenHeight;
const adjustWidth = screenWidth;

const CommentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={'Comments'}
        onPress={() => navigation.navigate('PostDetail')}
        source={require('../../../assets/images/backarrow.png')}
      />
      <Spacer height={adjustHeight * 0.01} />
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Avatar
          size={60}
          rounded
          source={require('../../../assets/images/profileIcon.png')}
        />
        <View style={{flexDirection: 'column', marginLeft: 10, rowGap: 0.01}}>
          <Text style={styles.text}>Charlotte</Text>
          <Text style={styles.text1}>Los Angeles</Text>
        </View>
      </View>
      <Text style={styles.textLine}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Text>
      <View style={styles.inputView}>
        <View style={styles.input}>
          <TextInputCustom
            placeholder={strings.name}
            placeholderTextColor={textInputColor.black}
            // value={value}
            // onChangeText={onChangeText}
          />
        </View>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../../../assets/images/Message.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10, bottom: 15}}>
        <Avatar
          size={60}
          rounded
          source={require('../../../assets/images/profileIcon2.png')}
        />
        <View style={{flexDirection: 'column', marginLeft: 10, rowGap: 0.01}}>
          <Text style={styles.text}>Kiara</Text>
          <Text style={styles.text1}>Los Angeles</Text>
        </View>
      </View>
      <Text style={styles.textLine2}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Text>
      <View style={{marginLeft: 90, bottom: 35}}>
        <Text style={styles.text}>Reply</Text>
        <Spacer height={adjustHeight * 0.007} />
        <View style={{flexDirection: 'row'}}>
          <Avatar
            size={50}
            rounded
            source={require('../../../assets/images/profileIcon3.png')}></Avatar>
          <View style={{flexDirection: 'column', marginLeft: 10, rowGap: 0.01}}>
            <Text style={styles.text}>Anjila</Text>
            <Text style={styles.text1}>Los Angeles</Text>
            <Text style={styles.textLine3}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, make a type specimen book.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Avatar
            size={50}
            rounded
            source={require('../../../assets/images/profileIcon4.png')}></Avatar>
          <View style={{flexDirection: 'column', marginLeft: 10, rowGap: 0.01}}>
            <Text style={styles.text}>Ria</Text>
            <Text style={styles.text1}>Los Angeles</Text>
            <Text style={styles.textLine3}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, make a type specimen book.
            </Text>
          </View>
        </View>
      </View>
      <Spacer height={adjustHeight * 0.05} />
      <View style={styles.card}>
        <Spacer height={adjustHeight * 0.012} />
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

export default CommentScreen;
