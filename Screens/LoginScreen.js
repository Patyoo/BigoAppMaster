import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';
import LoginAlert from '../Components/LoginAlert';
import AuthService from '../Services/Auth';
import {AsyncStorage} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.LoginAlert = new LoginAlert();
    this.authService = new AuthService();
  }
  state = {
    email: '',
    password: '',
  };

  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  login = (email, pass) => {
    this.authService.login(email, pass).then(res => {
      if (res) {
        AsyncStorage.setItem('token', res.token).done();
        AsyncStorage.setItem('owner', res.owner).done();
        AsyncStorage.setItem('name', res.name).done();
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('Invalid username or password');
      }
    });
  };

  componentWillUnmount() {
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
        <View style={flexBoxes.topBox} />
        <View style={flexBoxes.midBox}>
          <Text style={texts.label}>Email:</Text>
          <TextInput
            style={inputs.basicField}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
          <Text style={texts.label}>Password:</Text>
          <TextInput
            style={inputs.basicField}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
          <TouchableOpacity
            style={buttons.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={texts.button}> SignIn </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttons.submitButton}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={texts.button}> Register </Text>
          </TouchableOpacity>
        </View>
        <View style={flexBoxes.bottomBox} />
      </View>
    );
  }
}
