import React, {useState,useEffect} from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import CoachForm01 from './CoachForm01'
import CoachForm02 from './CoachForm02'
import CoachForm03 from './CoachForm03'



const CoachForm00 = () => {
    const [formState, setFormState] = useState({company: "", position: "", industry: "", description: "", city: "", state: ""});
    
    useEffect (() => {
        console.log(formState)
    },[formState])

    return (
        <
        <Route
			render={props => (
				<CoachForm01 {...props} formState={formState} setFormState={setFormState} />
		    )} 
        />
        


    )
}

export default CoachForm00