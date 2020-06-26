import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';

export default class StatisticsScreen extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
