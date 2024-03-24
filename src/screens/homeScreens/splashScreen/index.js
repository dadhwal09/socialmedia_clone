import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Login from '../../authScreens/loginScreen';
function Splash() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Login />
    </SafeAreaView>
  );
}

export default Splash;
