import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default class FriendScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 16}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginBottom: 16,
              }}>
              You are on Friends Screen
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddFriend')}>
          <Text>Open Add Friend Screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}