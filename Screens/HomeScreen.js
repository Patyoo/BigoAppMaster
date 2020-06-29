import * as React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Alert} from 'react-native';
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
  }

  state = {
    type: 'LM',
    counter: 0,
    bigoHistory: [],
  };
  componentDidMount() {
    this.authService.isValidUser().then(res => {
      if (!res) {
        this.LoginAlert.showAlert();
        this.props.navigation.navigate('Login');
      } else {
        this.onFetch();
      }
    });
  }

  onFetch = () => {
    this.bigoService.getBigoCountUser().then(res => {
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
        <View style={flexBoxes.topBox}>
          <View style={styles.logOffBox}>
            <TouchableOpacity style={styles.logOff} onPress={this.logout}>
              <Text style={styles.logOffText}> Logout </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={flexBoxes.midBox}>
          <TouchableOpacity style={styles.bigo} onPress={this.handleOnPress}>
            <MaterialCommunityIcons name="smoking" size={50} color={'white'} />
          </TouchableOpacity>
          <View style={styles.picker}>
            <Text style={styles.basicText}>Select your type of bigo</Text>
            <Picker
              selectedValue={this.state.type}
              style={styles.inputSelector}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({type: itemValue})
              }>
              <Picker.Item label="LM" value="LM" />
              <Picker.Item label="Loftky" value="Loftky" />
            </Picker>
          </View>
        </View>
        <View style={flexBoxes.bottomBox}>
          <View style={styles.logOffBox}>
            <Text style={styles.logOffText}>Total: {this.state.counter}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logOff: {
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  logOffBox: {
    alignSelf: 'flex-end',
    margin: 15,
  },
  logOffText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
  },
  basicText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  bigo: {
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    backgroundColor: 'black',
    borderRadius: 80,
    margin: 30,
  },
  inputSelector: {
    height: 50,
    width: 150,
    color: 'white',
  },
  picker: {
    width: 250,
    height: 75,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
  },
});
