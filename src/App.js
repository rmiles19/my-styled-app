import React from 'react';
import {
  Header,
  Button,
  Segment,
  Card,
  Icon,
} from 'semantic-ui-react';
import styled from 'styled-components';

const AppContainer=styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`

const App = () => (
  <AppContainer>
    <Header as="h1" textAlign="center">
      My Portfolio
    </Header>
    <Segment>
      <Header as='h2' textAlign='center'>
        My Projects
      </Header>
    </Segment>
      <Header as='h2' textAlign='center'>
        Contact
      </Header>
    <Segment>

    </Segment>
  </AppContainer>
)

export default App;
