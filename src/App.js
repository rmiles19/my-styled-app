import React from 'react';
import {
  Header,
  Button,
  Segment,
  Card,
  Icon,
  Grid,
} from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';
import HeaderText from './HeaderText';
import axios from 'axios';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`



const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 1px 1px black;
  animation: ${rotate360} 2s linear infinite;
`

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`

const Transparent = styled.div`
  background: transparent !important;
`

const StyledCard = styled(Card)`
  height: 200px;
`

const IssueCard = StyledCard.extend`
  border: solid 4px red !important;
`

const Truncated = styled.div`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

class App extends React.Component {
  state = { repos: [] }

  componentDidMount() {
    axios.get('https://api.github.com/users/rmiles19/repos?sort=created')
      .then( res => this.setState({ repos: res.data }) )
  }
  
  render() {
    return (
      <AppContainer>
        <Header fSize='large' as={HeaderText}>
          My Portfolio
        </Header>
        <Segment as={Transparent}>
          <Header as={HeaderText}>
            My Projects
          </Header>
          <Grid>
            <Grid.Row>
              { this.state.repos.map( r => {
                  const Component = r.open_issues > 0 ?
                    IssueCard : StyledCard
                  return (
                    <Grid.Column key={r.id} width={4}>
                      <Component>
                        <Card.Content>
                          <Card.Header>
                            <Truncated>
                              { r.full_name }
                            </Truncated>
                          </Card.Header>
                          <Card.Meta>
                            { r.description }
                          </Card.Meta>
                          { r.stargazers_count > 0 &&
                              <Star>
                                <Icon name="star" />
                              </Star>
                          }
                        </Card.Content>
                      </Component>
                    </Grid.Column>
                  )
                })
              }
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment as={Transparent}>
          <Header as={HeaderText}>
            Contact
          </Header>
        </Segment>
      </AppContainer>
    )
  }
}

export default App;