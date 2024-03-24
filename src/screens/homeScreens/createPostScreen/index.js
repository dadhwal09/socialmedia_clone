import { View, Text, TextInput, Dimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCustom from '../../../components/headerCustom';
import TextInputCustom from '../../../components/textInputCustom';
import strings from '../../../themes/constants/strings';
import DescriptionCustom from '../../../components/descriptionInput';
import Spacer from '../../../components/spacer';
import { Image } from 'react-native';
import ButtonCustom from '../../../components/buttonCustom';

const height = Dimensions.get('window').height;
const adjustHeight = height;

const CreatePost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer height={adjustHeight * 0.01} />
      <HeaderCustom
        text={'Create Post'}
        source={require('../../../assets/images/backarrow.png')}
        onPress={() => navigation.navigate('Home')}
      />
      <Spacer height={adjustHeight * 0.01} />
      <View style={styles.textInput}>
        <TextInputCustom
          label={strings.titlePost}
          placeholder={strings.lorem}
        />
      </View>
      <Spacer height={adjustHeight * 0.02} />
      <View style={styles.textInput2}>
        <DescriptionCustom
          label={'Description'}
          placeholder={strings.loremDetail}
        />
      </View>
      <Spacer height={adjustHeight * 0.02} />
      <Text style={styles.text}>Image/Videos</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/images/postImage.png')}
      />
      <Spacer height={adjustHeight * 0.1} />
      <ButtonCustom
        title={'Post'}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default CreatePost;
