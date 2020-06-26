import * as React from 'react';
import {StyleSheet, View, Text, TextInput, Alert} from 'react-native';
export default class LoginAlert {
  showAlert() {
    Alert.alert(
      'No user detected',
      'Please sign in',
      [
        // {
        //   text: 'OK',
        //   onPress: () => console.log('Ask me later pressed'),
        // },
      ],
      {cancelable: true},
    );
  }
}
