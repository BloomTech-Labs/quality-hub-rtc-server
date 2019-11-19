import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import InterviewLandingPage from "./components/Landing Page/index.js"
import CoachForm00 from "./components/CoachForm/CoachForm00";
import NavBar from './components/NavBar';
import DatePicker from './components/DatePicker';

import './index.scss';
import CoachFormTwo from './components/CoachForm/CoachForm00.js';

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
<Route path="/form02" component={CoachFormTwo}/>
      </Switch>
    </div>
  );
}

export default App;
