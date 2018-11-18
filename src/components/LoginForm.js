 import React, { Component } from 'react';
 import { Text } from 'react-native';
 import firebase from '@firebase/app';
 import '@firebase/auth';
 import { Button, Card, CardSection, Input } from './common';

 class LoginForm extends Component {
   state = { email: '', password: '', error: '' };

   onButtonPress() {
     const { email, password } = this.state;
     this.setState({ error: '' })

     firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication failed' });
          });
      });
   }

   render() {
     return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
     );
   }
 }

 const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
 };

 export default LoginForm;
