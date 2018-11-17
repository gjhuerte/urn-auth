import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  componentsWillMount() {
    var config = {
      apiKey: 'AIzaSyD0rCEcQ-Mi7iXM1tzgD9VEvvDpc-E3KqI',
      authDomain: 'authentication-38fdb.firebaseapp.com',
      databaseURL: 'https://authentication-38fdb.firebaseio.com',
      projectId: 'authentication-38fdb',
      storageBucket: 'authentication-38fdb.appspot.com',
      messagingSenderId: '752680039115'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
