import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import LoginPage from './src/containers/LoginPage';

class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginPage />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});