import React from 'react';
import { Route, withRouter } from "react-router-dom"; 
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react"

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push("/login")
  }

  render() {
    return (
      <Security issuer='https://dev-747894.okta.com/oauth2/default'
                  clientId='0oab3stl0Y4dWagkl4x6'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={this.onAuthRequired}
                  pkce={true} >
        <div className="App">
          <Navbar />
          <div className="container"> 
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-747894.okta.com' />} />
            <Route path='/implicit/callback' component={LoginCallback} />
          </div>  
        </div>
      </Security>
    );
  }
}

export default withRouter(App);
