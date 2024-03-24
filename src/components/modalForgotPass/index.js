import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';

import ButtonCustom from '../buttonCustom';
import strings from '../../themes/constants/strings';

const ModalForgotPassword = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal animationType="true" transparent={true} visible={modalVisible}>
        <Text>hi</Text>
        <ButtonCustom
          title={strings.modalButton}
          onPress={setModalVisible(true)}
        />
      </Modal>
    </View>
  );
};

export default ModalForgotPassword;
