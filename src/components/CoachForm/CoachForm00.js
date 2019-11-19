import React, {useState,useEffect} from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import ProgressBar from './ProgressBar'
import CoachForm01 from './CoachForm01'
import CoachForm02 from './CoachForm02'
import CoachForm03 from './CoachForm03'



const CoachForm00 = () => {
    const [formState, setFormState] = useState({company: "", position: "", industry: "", description: "", city: "", state: ""});
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
            <Route
                render={props => (
                    <CoachForm01 {...props} formState={formState} setFormState={setFormState} handleProgress={handleProgress}/>
                )} 
            />
        </div>


    )
}

export default CoachForm00