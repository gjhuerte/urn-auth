 import React, { Component } from 'react';
 import firebase from '@firebase/app';
 import '@firebase/auth';
 import { Button, Card, CardSection, Input } from './common';

 class LoginForm extends Component {
   state = { email: '', password: '' };

   onButtonPress() {
     const { email, password } = this.state;

     firebase.auth().signInWithEmailAndPassword(email, password);
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
     );
   }
 }

 export default LoginForm;
