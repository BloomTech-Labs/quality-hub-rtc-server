import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoachForm.scss';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';


// }

function CoachFormTwo () {

  const [value, setValue] = useState(0)
  
  const handleChangeStart = () => {
    console.log('Change event started')
  };

  const handleChange = value => {
    setValue(value)
  };

  const handleChangeComplete = () => {
    console.log('Change event completed')
  };

  return (
    <div className='slider'>
      <h2>Hourly Rate</h2>
      <p>Please set your hourly rate. To get the most jobs, we recommend setting your rate between $20 and $50.</p>
      <div className='value'>${value}</div>
      <div className="Slider">
        <Slider
          min={0}
          max={200}
          value={value}
          onChangeStart={handleChangeStart}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>
      {/* <div className='value'>{value}</div> */}
      <div className="HourlyRate-buttons">
        <Link to='/addcoach'>Back</Link>
        <br/>
        <Link to='/addcoach/03'>Save and next</Link>
      </div>
    </div>
  )
}
  
export default CoachFormTwo;