import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 16}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginBottom: 16,
              }}>
              You are on Home Screen
            </Text>
            <TouchableOpacity
              style={styles.button} //navigation.navigate('SettingsStack', {screen: 'Settings'})
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text>Go to Loginn Tab</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text>Open Register Screen</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
            React Native Bottom Navigation
          </Text>
          <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
            www.aboutreact.com
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
