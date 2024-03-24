import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/homeScreens/homeScreen';
import FriendsScreen from '../../screens/homeScreens/friendsScreen';
import MessageScreen from '../../screens/homeScreens/messsageScreen';
import EventScreen from '../../screens/homeScreens/eventsScreen';
import ProfileBottomScreen from '../../screens/homeScreens/profileBottomScreen';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const adjustheight = height;
const adjustwidth = width;
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF7019',
        tabBarInactiveTintColor: '#423B2F',

        tabBarStyle: {
          backgroundColor: '#FFFAF1',
          borderRadius: 10,
          height: adjustheight * 0.08,
          paddingTop: 5,
          paddingBottom: 10,
          borderColor: "#F87C5233"
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <Icon name='home' size={40} color={color} />
            ),
          }
        }
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <Icon name='account-multiple' size={40} color={color} />
            ),
          }
        }
      />

      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <Icon name='chat' size={40} color={color} />
            ),
          }
        }
      />
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <Icon name='calendar-multiple' size={40} color={color} />
            ),
          }
        }
      />
      <Tab.Screen
        name="Profile"
        component={ProfileBottomScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <Icon name='account' size={40} color={color} />
            ),
          }
        }
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
