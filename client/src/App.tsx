import React from 'react';
import HomePage from './pages/HomePage'
import "./App.css";
import AdminPage from './pages/AdminPage';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage}/>
      <Route path="/admin" component={AdminPage}/>
      <Route path="/test" component={SigninPage}/>
    </BrowserRouter>
  );
}

export default App;
