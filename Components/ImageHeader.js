import React, {Component} from 'react';

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import icon from '../Assets/bigoLogo.png';

export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: 'black'}}>
        <Image
          source={icon}
          style={{
            width: 170,
            height: 55,
            marginLeft: 15,
            marginTop: 3,
          }}
        />
      </View>
    );
  }
}
