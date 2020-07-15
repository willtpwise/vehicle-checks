import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CheckList } from './routes/check-list';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
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

export default App;
