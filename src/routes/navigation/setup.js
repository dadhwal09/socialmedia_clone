import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './index';

const SetUp = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default SetUp;
