import React, { useState} from 'react';
import './CoachForm.scss';


const CoachFormTwo = () => {
   

// Range slider needs styling
    return(<div>
        <h2>Hourly Rate</h2>
             <p>Please set your hourly rate. To get the most jobs, we recommend setting your rate between $20 and $50.</p>
         <div class="slidecontainer">
             <input type="range"
                 min="1"
                 max="100"
                 value="0"
                 class="slider"
                 id="slider"
                 />
                </div>
            <br/> 
             <div className="HourlyRate-buttons">
                 <button>Back</button>
                 <button>Save and next</button>
              </div>
              
        </div>
    )

}

export default CoachFormTwo;