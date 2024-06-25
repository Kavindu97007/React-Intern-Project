import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Login from './Login';
//import Content from './Content'; //
//import './App.css';  // Global CSS for the App component (if any)
import Login from '../src/View/LoginPage/login';
import Content from '../src/View/ContentPage/content';  // Import the Login component

function App() {
  return (
    <Router>
    <Switch>
      <Login />
      <Route path="/content" component={Content} />
    </Switch>
  </Router>
  );
}

export default App;