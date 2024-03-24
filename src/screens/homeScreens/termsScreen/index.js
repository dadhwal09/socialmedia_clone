import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import strings from '../../../themes/constants/strings';
import TermsHeader from '../../../components/termsHeader';

const TermsCondition = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TermsHeader
        text={strings.terms}
        onPress={() => navigation.navigate('Login')}
        onPressLeft={() => navigation.navigate('Settings')}
        style={styles.backArrow}
      />
      <Text style={styles.text}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Text>
      <Text style={styles.text}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Text>
      <Text style={styles.text}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Text>
    </View>
  );
};

export default TermsCondition;
