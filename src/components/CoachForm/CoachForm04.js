import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AST_PropAccess } from 'terser';

const CoachForm = ({setFormState, formState, handleProgress, history}) => {

    function submitHandler () {
        console.log("this is where the gql goes")
        history.push('../')
    }
    
    const [progress, setProgress] = useState(1)
    
    return(
        <div>
            <div className="review-form-container">
                <div>
                    <h3>Company</h3>
                    <h4>{formState.company}</h4>
                </div>
                <div>
                    <h3>Position</h3>
                    <h4>{formState.position}</h4>
                </div>
                <div>
                    <h3>Description</h3>
                    <h4>{formState.description}</h4>
                </div>
                <div>
                    <h3>Location</h3>
                    <h4>{formState.location}</h4>
                </div>
                <div>
                    <h3>Price</h3>
                    <h4>{formState.price}</h4>
                </div>
                <div>
                    <h3>LinkedIn</h3>
                    <h4></h4>
                </div>
                <div>
                    <h3>GitHub</h3>
                    <h4></h4>
                </div>
                <div>
                    <h3>Website</h3>
                    <h4></h4>
                </div>
                <div>
                    <h3>Portfolio</h3>
                    <h4></h4>
                </div>
                <div>
                    <h3>Twitter</h3>
                    <h4></h4>
                </div>
            </div>
            <div>
                <Link>Back</Link>
                <button onClick={submitHandler}>Publish</button>
            </div>

        </div>
    )
}

export default CoachForm;