import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import InterviewLandingPage from "./components/Landing Page/index.js"
import NavBar from './components/NavBar';
import DatePicker from './components/DatePicker';

import './index.scss';

function App() {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <div className="App">
      <Route
				path='/'
				render={props => (
					<NavBar {...props} loggedin={loggedin} setLoggedin={setLoggedin} />
				)}
			/>
      <Switch>
      <Route exact path='/' component={InterviewLandingPage}/>
      <Route path="/hey" component={DatePicker} />
      </Switch>
    </div>
  );
}

export default App;
