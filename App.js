// import React, {Component} from 'react';
// import AppContainer from './Navigation/AppNavigator';

// export default class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Components/HomeScreen';

import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';
import StaticticsScreen from './Components/StatisticsScreen';
import FriendsScreen from './Components/FriendsScreen';
import AddFriendScreen from './Components/AddFriendScreen';
import ActionBarImage from './Components/ImageHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: () => <ActionBarImage />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login Page'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register Page'}}
      />
    </Stack.Navigator>
  );
}

function StatsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Stats"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: () => <ActionBarImage />,
      }}>
      <Stack.Screen
        name="Stats"
        component={StaticticsScreen}
        options={{title: 'Stats Page'}}
      />
    </Stack.Navigator>
  );
}

function FriendsStats() {
  return (
    <Stack.Navigator
      initialRouteName="Friends"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: () => <ActionBarImage />,
      }}>
      <Stack.Screen
        name="Friends"
        component={FriendsScreen}
        options={{title: 'Friends Page'}}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriendScreen}
        options={{title: 'Add Friend Page'}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="StatsStack"
          component={StatsStack}
          options={{
            tabBarLabel: 'Stats',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FriendsStack"
          component={FriendsStats}
          options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
