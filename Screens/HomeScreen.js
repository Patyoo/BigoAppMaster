import * as React from 'react';
import {TouchableOpacity, View, Text, Alert} from 'react-native';
import {flexBoxes, buttons, texts, inputs} from '../Assets/componentStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-community/picker';
import LoginAlert from '../Components/LoginAlert';
import AuthService from '../Services/Auth';
import BigoService from '../Services/Bigo';
import {AsyncStorage} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.LoginAlert = new LoginAlert();
    this.authService = new AuthService();
    this.bigoService = new BigoService();
    this.onFetch();
  }

  state = {
    type: 'LM',
    counter: 0,
    bigoHistory: [],
  };

  onFetch = () => {
    this.bigoService.getBigoCountUser().then(res => {
      //console.log(res);
      this.setState({
        counter: res.length,
        bigoHistory: res.map(item => {
          return {
            brand: item.brand,
            created: new Date(item.created).toLocaleTimeString('en-US'),
          };
        }),
      });
      console.log(this.state.bigoHistory);
    });
  };

  handleOnPress = () => {
    this.setState({counter: this.state.counter + 1});
    this.bigoService
      .createBigoAsync(this.state.type)
      .then(r => console.log('CREATE BIGO'));
  };

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

  render() {
    return (
      <View style={flexBoxes.container}>
        <View style={flexBoxes.topBox} />
        <View style={flexBoxes.midBox}>
          <TouchableOpacity
            style={buttons.roundButtonBig}
            onPress={this.handleOnPress}>
            <MaterialCommunityIcons name="smoking" size={50} color={'white'} />
          </TouchableOpacity>
          <View style={inputs.picker}>
            <Text style={texts.basicText}>Select your type of bigo</Text>
            <Picker
              selectedValue={this.state.type}
              style={inputs.inputSelector}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({type: itemValue})
              }>
              <Picker.Item label="LM" value="LM" />
              <Picker.Item label="Loftky" value="Loftky" />
            </Picker>
          </View>
        </View>
        <View style={flexBoxes.bottomBox}>
          <View style={buttons.rightBox}>
            <Text style={texts.basicText}>Total: {this.state.counter}</Text>
          </View>
        </View>
      </View>
    );
  }
}
