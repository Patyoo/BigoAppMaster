import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';
import LoginAlert from '../Components/LoginAlert';
import AuthService from '../Services/Auth';
import {AsyncStorage} from 'react-native';

export default class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.LoginAlert = new LoginAlert();
    this.authService = new AuthService();
  }

  logout = () => {
    this.authService.logout().then(res => {
      if (res) {
        AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Login');
      } else {
        Alert.alert('Something went wrong');
      }
    });
  };

  componentDidMount() {
    this.authService.isValidUser().then(res => {
      if (!res) {
        this.LoginAlert.showAlert();
        this.props.navigation.navigate('Login');
      }
    });
  }

  render() {
    return (
      <View style={flexBoxes.container}>
        <View style={flexBoxes.topBox}>
          <View style={buttons.rightBox}>
            <TouchableOpacity style={buttons.roundButton} onPress={this.logout}>
              <Text style={texts.basicText}> Logout </Text>
            </TouchableOpacity>
          </View>
        </View>
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
