import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  handleConfirmPassword = text => {
    this.setState({confirmPassword: text});
  };
  registerUser = (name, email, pass, confirmPass) => {
    console.log(
      `name: ${name} email: ${email} password: ${pass} confirmPassword: ${confirmPass}`,
    );
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
            onChangeText={this.handleEmail}
          />
          <Text style={texts.label}>Email:</Text>
          <TextInput
            style={inputs.basicField}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
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
              this.registerUser(
                this.state.name,
                this.state.email,
                this.state.password,
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
