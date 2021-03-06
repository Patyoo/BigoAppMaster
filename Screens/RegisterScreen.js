import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';
import AuthService from '../Services/Auth';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleName = text => {
    this.setState({name: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  register = (email, pass, name) => {
    this.authService.register(name, email, pass).then(res => {
      if (res) {
        this.props.navigation.navigate('Login');
      } else {
        Alert.alert('Invalid registration');
      }
    });
  };
  render() {
    return (
      <View style={flexBoxes.container}>
        <View style={flexBoxes.topBox} />
        <View style={flexBoxes.midBox}>
          <Text style={texts.label}>Name:</Text>
          <TextInput
            style={inputs.basicField}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handleName}
          />
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
            onPress={() =>
              this.register(
                this.state.email,
                this.state.password,
                this.state.name,
              )
            }>
            <Text style={texts.button}> Register </Text>
          </TouchableOpacity>
        </View>
        <View style={flexBoxes.bottomBox} />
      </View>
    );
  }
}
