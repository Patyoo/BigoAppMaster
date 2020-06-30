// import React, {Component} from 'react';
// import AppContainer from './Navigation/AppNavigator';

// export default class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

import 'react-native-gesture-handler';

import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/HomeScreen';
import SettingScreen from './Screens/SettingScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import StaticticsScreen from './Screens/StatisticsScreen';
import FriendsScreen from './Screens/FriendsScreen';
import AddFriendScreen from './Screens/AddFriendScreen';
import ActionBarImage from './Components/ImageHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        header: () => <ActionBarImage />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => <ActionBarImage />}}
      />
    </Stack.Navigator>
  );
}

function StatsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Stats"
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        header: () => <ActionBarImage />,
      }}>
      <Stack.Screen
        name="Stats"
        component={StaticticsScreen}
        options={{header: () => <ActionBarImage />}}
      />
    </Stack.Navigator>
  );
}

function FriendsStats() {
  return (
    <Stack.Navigator
      initialRouteName="Friends"
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        header: () => <ActionBarImage />,
      }}>
      <Stack.Screen
        name="Friends"
        component={FriendsScreen}
        options={{header: () => <ActionBarImage />}}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriendScreen}
        options={{header: () => <ActionBarImage />}}
      />
    </Stack.Navigator>
  );
}
function SettingsStats() {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        header: () => <ActionBarImage />,
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{header: () => <ActionBarImage />}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => <ActionBarImage />}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{header: () => <ActionBarImage />}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SettingsStats"
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'white',
          activeBackgroundColor: 'white',
          inactiveBackgroundColor: 'black',
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
                name="chart-bar"
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
                name="account-multiple"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStats"
          component={SettingsStats}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
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
