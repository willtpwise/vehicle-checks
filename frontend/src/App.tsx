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

Amplify.configure(awsconfig);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    authenticatorBody: {
      margin: '5vw 0',
      textAlign: 'center',
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
      <h1>Vehicle Checks</h1>
      <p>Free Online Heavy Vehicle Checklist</p>

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
