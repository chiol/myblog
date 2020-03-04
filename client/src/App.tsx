import React from 'react';
import HomePage from './pages/HomePage'
import "./App.css";
import AdminPage from './pages/AdminPage';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';

function App() {
  return (
<<<<<<< HEAD
    <div>
      <HomePage/>
      {/* <AdminPage/> */}
    </div>
=======
    <BrowserRouter>
      <Route exact path="/" component={HomePage}/>
      <Route path="/admin" component={AdminPage}/>
      <Route path="/test" component={SigninPage}/>
    </BrowserRouter>
>>>>>>> e4499d7ed5cd10b00dd492d317447314a6197e23
  );
}

export default App;
