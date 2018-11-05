//React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//UI Library
import { Container, Grid, Icon, Header, Image, Menu, Segment, Button } from 'semantic-ui-react'
import logo from './images/logo.png';
//Components
import HostingCard from './components/hosting.js';
import AnalyticsCard from './components/analytics.js';
import StorageCard from './components/storage.js';
import AuthenticationCard from './components/authentication.js';
import APICard from './components/api.js';
//Amplify
/*
import Amplify, {Auth} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
*/

class App extends Component {
  /*
  logout=() => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  */

  state = { activeItem: null, visible: false };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const activeItem = this.state.activeItem != null ? this.state.activeItem : window.location.pathname.replace('/', '');

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Segment inverted color='grey'>
            <Menu stackable style={{ border: '0px' }} inverted size='large' pointing secondary color='grey' >
              <Menu.Item as='a' header>
                <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
              </Menu.Item>
              <Link to="/"><Menu.Item as='a' name='hosting' active={activeItem === 'hosting' || activeItem === ''} onClick={this.handleItemClick}><Icon name='home' /> hosting</Menu.Item></Link>
              <Link to="/authentication"><Menu.Item as='a' name='authentication' active={activeItem === 'authentication'} onClick={this.handleItemClick}><i className='user plus icon' />  Authentication</Menu.Item></Link>
              <Link to="/storage"><Menu.Item as='a' name='storage' active={activeItem === 'storage'} onClick={this.handleItemClick}><i className='cloud upload icon' /> Storage</Menu.Item></Link>
              <Link to="/api"><Menu.Item as='a' name='api' active={activeItem === 'api'} onClick={this.handleItemClick}><i className='cloud icon' /> API</Menu.Item></Link>
              <Link to="/analytics"><Menu.Item as='a' name='analytics' active={activeItem === 'analytics'} onClick={this.handleItemClick}><i className='chart bar outline icon' />Analytics </Menu.Item></Link>
              
              {/* 
              <Menu.Item position='right'>
                <Button as='a' onClick={this.logout} inverted>
                  Log Out
                  </Button>
              </Menu.Item> 
              */}

            </Menu>
          </Segment>
          <Container>
          <Grid container centered stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={16}>
                <Container text style={{ marginTop: '3em' }}>
                  <Header as='h1' content='AWS Amplify - React Demo'
                    style={{
                      fontSize: '3em'
                    }} />
                  <div className="content">
                    <Route exact path="/" component={HostingCard} />
                    <Route path="/hosting" component={HostingCard} />
                    <Route path="/authentication" component={AuthenticationCard} />
                    <Route path="/api" component={APICard} />
                    <Route path="/storage" component={StorageCard} />
                    <Route path="/analytics" component={AnalyticsCard} />
                  </div>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;
// export default withAuthenticator(App, true);