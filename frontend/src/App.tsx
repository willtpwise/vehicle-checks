import { withAuthenticator, AmplifyAuthenticator, AmplifyGreetings, AmplifySignUp, AmplifyConfirmSignIn } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import awsconfig from './aws-exports'; 
import TopBar from './components/TopBar';
import { CheckList } from './routes/check-list';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import logo from './logo.png'

Amplify.configure(awsconfig);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    authenticatorBody: {
      margin: '5vw 0',
      textAlign: 'center',
    },
    logo: {
      width: '100px',
      height: '100px',
      display: 'block',
      margin: '0 auto',
    },
    subTitle: {
      lineHeight: 1.3,
      fontSize: '18px',
      marginBottom: '24px',
      color: '#222',
    },
  }),
);

function App() {
  return (
    <Router>
      <TopBar />
      <div>
        <Switch>
          <Route path="*">
            <CheckList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Authenticator () {

  const classes = useStyles()

  return (
    <div className={classes.authenticatorBody}>
      <img className={classes.logo} src={logo} alt="Fire truck" />
      <h1>Vehicle Checks</h1>
      <p className={classes.subTitle}>Free Online Heavy Vehicle Checklist <br></br>for the NSW Rural Fire Service</p>

      <AmplifyAuthenticator
        usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          headerText="Create your free account today"
          haveAccountText="Already a user?"
          formFields={[
            {
              type: "email",
              label: "Email",
              required: true,
            },
            {
              type: "password",
              label: "Password",
              required: true,
            },
          ]} 
        />
        <AmplifyConfirmSignIn 
          headerText="Check your email for a verification code"
          slot="confirm-sign-in">
        </AmplifyConfirmSignIn>
      </AmplifyAuthenticator>
    </div>
  )

}

export default function AppWithAuthenticator() {

  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<object>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <App />
  ) : (
    <Authenticator />
  );

}
