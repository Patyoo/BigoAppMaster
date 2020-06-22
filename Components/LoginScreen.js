import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
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
    alert('email: ' + email + ' password: ' + pass);
  };

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
            <Text style={texts.button}> Submit </Text>
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
