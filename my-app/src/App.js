import React from 'react';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import {Route , Switch , Redirect} from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Redirect from="/" to="/signup"/>
      </Switch>
    </div>
  );
};

export default App;
