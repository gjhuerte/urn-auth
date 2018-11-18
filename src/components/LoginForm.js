 import React, { Component } from 'react';
 import { Button, Card, CardSection, Input } from './common';

 class LoginForm extends Component {
   state = { text: '' };

   render() {
     return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@email.com"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
     );
   }
 }

 export default LoginForm;
