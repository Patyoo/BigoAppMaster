import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';

export default class FriendScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={flexBoxes.container}>
        <View style={flexBoxes.topBox} />
        <View style={flexBoxes.midBox} />
        <View style={flexBoxes.bottomBox} />
      </View>
    );
  }
}