import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/authScreens/loginScreen';
import SignUp from '../../screens/authScreens/signUpScreen';
import ForgotPassword from '../../screens/homeScreens/forgotPassword';
import ProfileScreen from '../../screens/homeScreens/profileScreen';
import TermsCondition from '../../screens/homeScreens/termsScreen';
import HomeScreen from '../../screens/homeScreens/homeScreen';
import BottomNavigator from '../bottomNavigation';
import PostDetail from '../../screens/homeScreens/postDetailScreen';
import CommentScreen from '../../screens/homeScreens/commentScreen';
import CreatePost from '../../screens/homeScreens/createPostScreen';
import SearchScreen from '../../screens/homeScreens/searchScreen';
import FriendRequestScreen from '../../screens/homeScreens/friendRequestScreen';
import FriendsProfile from '../../screens/homeScreens/friendsProfile';
import NewMessageScreen from '../../screens/homeScreens/newMessageScreen';
import MessageChatScreen from '../../screens/homeScreens/message2Screen';
import EventDetailScreen from '../../screens/homeScreens/eventDetailScreen';
import EditProfileScreen from '../../screens/homeScreens/editProfileScreen';
import PostDetailProfileScreen from '../../screens/homeScreens/postDetailProfScreen';
import EditPostBtmScreen from '../../screens/homeScreens/EditPostBtmScreen';
import NotificationScreen from '../../screens/homeScreens/notificationScreen';
import SettingScreen from '../../screens/homeScreens/settingsScreen';
import ContactScreen from '../../screens/homeScreens/contactScreen';
import AboutUsScreen from '../../screens/homeScreens/aboutUSScreen';
import ChangePasswordScreen from '../../screens/homeScreens/changePasswordScreen';
import PrivacyScreen from '../../screens/homeScreens/privacyScreen';
import BlockedFriendScreen from '../../screens/homeScreens/blockedFriendsScreen';
import Subscription12Screen from '../../screens/homeScreens/subscipt12Screen';
import SubscriptionDetailScreen from '../../screens/homeScreens/subsciptDetailScreen';
import SplashScreen from 'react-native-splash-screen';

const AuthStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [3000]);
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="AuthStackNavigator"
        component={AuthStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const AuthStackNavigator = () => {
  return (
    <>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="ForgotPass"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="ProfileSignUp"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Terms"
          component={TermsCondition}
          options={{ headerShown: false }}
        />
        {/* <AuthStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */}
        <AuthStack.Screen
          name="Bottom"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Comments"
          component={CommentScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="FriendRequest"
          component={FriendRequestScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="FriendProfile"
          component={FriendsProfile}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="NewMesssage"
          component={NewMessageScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="ChatMessage"
          component={MessageChatScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="PostProfile"
          component={PostDetailProfileScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="EditPost"
          component={EditPostBtmScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Settings"
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="ContactUs"
          component={ContactScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="BlockedFriend"
          component={BlockedFriendScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Subscript12"
          component={Subscription12Screen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="SubscriptDetail"
          component={SubscriptionDetailScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </>
  );
};
