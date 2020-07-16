import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CheckList } from './routes/check-list';
import TopBar from './components/TopBar';
import Amplify, { API, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

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

export default withAuthenticator(App);
