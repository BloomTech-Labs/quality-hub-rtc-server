import React, {useState,useEffect} from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import ProgressBar from './ProgressBar'
import CoachForm01 from './CoachForm01'
import CoachForm02 from './CoachForm02'
import CoachForm03 from './CoachForm03'
import CoachForm04 from './CoachForm04'
import CoachForm05 from './CoachForm05'



const CoachForm00 = () => {
    const [formState, setFormState] = useState({
      company: "",
      position: "",
      industry: "",
      description: "",
      city: "",
      state: "",
      price: ""
    });

    const [accounts, setAccounts] = useState({
      linkedin_url: '',
      linkedin_switch: false,
      github_url: '',
      github_switch: false,
      website_url: '',
      website_switch: false,
      portfolio_url: '',
      portfolio_switch: false,
      twitter_url: '',
      twitter_switch: false,
  })
    const [progress, setProgress] = useState(1) 

    useEffect (() => {
        console.log(formState)
    },[formState])

    const handleProgress = (e) => {
      e.preventDefault();
      if (e.target.value) {
        setProgress(prog => prog + 1)
      } else {
        setProgress(prog => prog - 1)
      }
    }

    return (
        <div>
            <ProgressBar progress={progress} />
            <Route exact path="/addcoach"
                render={props => (
                    <CoachForm01 {...props} formState={formState} setFormState={setFormState} handleProgress={handleProgress}/>
                )} 
            />
            <Route path="/addcoach/02"
                render={props => (
                    <CoachForm02 {...props} formState={formState} setFormState={setFormState} handleProgress={handleProgress}/>
                )} 
            />
            <Route path="/addcoach/03"
                render={props => (
                    <CoachForm03 {...props} formState={formState} setFormState={setFormState} handleProgress={handleProgress} accounts={accounts} setAccounts={setAccounts} />
                )} 
            />
            <Route path="/addcoach/04"
                render={props => (
                    <CoachForm04 {...props} formState={formState} setFormState={setFormState} handleProgress={handleProgress} accounts={accounts} setAccounts={setAccounts} />
                )} 
            />
            <Route path="/addcoach/05"
                render={props => (
                    <CoachForm05 {...props} formState={formState} setFormState={setFormState} handleProgress={handleProgress}/>
                )} 
            />
        </div>
    )
}

export default CoachForm00