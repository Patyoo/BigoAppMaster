import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';
import LoginAlert from '../Components/LoginAlert';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.LoginAlert = new LoginAlert();
  }
  state = {
    email: '',
    password: '',
    signedIn: false,
  };

  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };

  componentWillUnmount() {
    if (this.state.signedIn === false) {
      this.LoginAlert.showAlert();
      this.props.navigation.navigate('Login');
    }
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
