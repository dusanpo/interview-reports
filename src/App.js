import React ,{Fragment} from 'react';


import './App.css';

import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
   <Fragment>
      <LoginPage />
      <LandingPage/>
    </Fragment>
   
  );
}

export default App;
