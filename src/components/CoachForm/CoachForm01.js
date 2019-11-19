import React, { useState } from 'react';
import { gql } from 'apollo-boost';

import ProgressBar from './ProgressBar';

function submitHandler() {
//     axiosWithAuth
//     .post()
}

const CoachForm = () => {
    const [formState, setFormState] = useState({company: "", position: "", industry: "", description: "", city: "", state: ""});
    const [progress, setProgress] = useState(1)
    const handleProgress = (e) => {
      e.preventDefault();
      if (e.target.value) {
        setProgress(prog => prog + 1)
      } else {
        setProgress(prog => prog - 1)
      }

    }
    return(
        <div className="coach-form-container">
            <ProgressBar progress={progress} />
            <h2 className="coach-form-title">Coach Profile</h2>
            <p className="coach-form-title">
                This is your InterviewQ coach profile. Seekers will see this information. Write everything that you want seekers to know about you. This is your chance to sell yourself to prospective seekers! 
            </p>
            <form className="coach-form" onSubmit={submitHandler}>

                <div className="coach-form-company">
                    <h3>Company</h3>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formState.company}
                        onChange={event => {console.log(formState); return setFormState({...formState, company: event.target.value})}}
                        />
                </div>
                <div className="coach-form-position">
                    <h3>Position</h3>
                    <input
                        type="text"
                        name="position"
                        placeholder="Position Title"
                        value={formState.position}
                        onChange={event => {console.log(formState); return setFormState({...formState, position: event.target.value})}}
                        />
                </div>
                <div className="coach-form-industry">
                    <h3>Industry</h3>
                    <select>
                        <option value={null}>Select Industry</option>
                        <option value="business">Business</option>
                        <option value="education">Education</option>
                        <option value="engineering">Engineering</option>
                        <option value="hr">Human Resources</option>
                        <option value="marketing">Marketing</option>
                        <option value="software">Software</option>
                    </select>
                </div>
                <div className="coach-form-description">
                    <h3>Description</h3>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter Name"
                        value={formState.description}
                        onChange={event => {console.log(formState); return setFormState({...formState, description: event.target.value})}}
                        />
                </div>
                <div className="coach-form-location">
                    <div className="coach-form-city">
                        <h3>City</h3>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter Name"
                            value={formState.city}
                            onChange={event => {console.log(formState); return setFormState({...formState, city: event.target.value})}}
                        />
                    </div>
                    <div className="coach-form-state">
                        <h3>State</h3>
                        <input
                            type="text"
                            name="state"
                            placeholder="Enter Name"
                            value={formState.state}
                            onChange={event => {console.log(formState); return setFormState({...formState, state: event.target.value})}}
                        />
                    </div>
                </div>
                <div className="coach-form-buttons">
                    <div onClick={handleProgress}>Back</div>
                    <button type="submit" value="next" onClick={handleProgress}>Save and next</button>
                </div>
            </form>
        </div>
    )
}

export default CoachForm;