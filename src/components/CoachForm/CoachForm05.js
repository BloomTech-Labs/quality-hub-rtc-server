import React from 'react';
import { Link } from 'react-router-dom';


//Icon
import Check from '../../icons/check.svg';




const CoachForm05 = () => {



    return (
        <div>
           <img src={Check} alt='succesCheck'/>
            <h2> Your coach profile is live!</h2>
            <br/>
            <h4>You can see it in the coaches</h4>
            <br/>
            <Link to='/'>Got to Dashboard</Link>
        </div>
    )

};



export default CoachForm05;