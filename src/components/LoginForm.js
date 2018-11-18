 import React, { Component } from 'react';
 import { Button, Card, CardSection, Input } from './common';

 class LoginForm extends Component {
   state = { email: '' };

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
