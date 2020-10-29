import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/Login';
import User from './components/User';

function App() {
  const {isLoading} = useAuth0();

  if(isLoading) return <div>Loading....</div>

  return (
    <Router>
    <>
    <div className='App'>
      <Navbar />
    </div>
    <Login />
    <User />
    </>
    </Router>
  );
}

export default App;
