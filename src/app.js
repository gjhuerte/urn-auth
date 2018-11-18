import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0rCEcQ-Mi7iXM1tzgD9VEvvDpc-E3KqI',
      authDomain: 'authentication-38fdb.firebaseapp.com',
      databaseURL: 'https://authentication-38fdb.firebaseio.com',
      projectId: 'authentication-38fdb',
      storageBucket: 'authentication-38fdb.appspot.com',
      messagingSenderId: '752680039115'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
