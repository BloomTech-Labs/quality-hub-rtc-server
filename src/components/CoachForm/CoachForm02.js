import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import './CoachForm.scss';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
// const CoachFormTwo = () => {
   

// // Range slider needs styling
//     return(
//     <div>
//         <h2>Hourly Rate</h2>
//              <p>Please set your hourly rate. To get the most jobs, we recommend setting your rate between $20 and $50.</p>
//          <div class="slidecontainer">
//              <input type="range"
//                  min="1"
//                  max="100"
//                  value="0"
//                  class="slider"
//                  id="slider"
//                  />
//                 </div>
//             <br/> 
//              <div className="HourlyRate-buttons">
//                  <button>Back</button>
//                  <button>Save and next</button>
//               </div>
              
//         </div>
//     )

// }
class CoachFormTwo extends Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        value: 0
      }
    }
  
    handleChangeStart = () => {
      console.log('Change event started')
    };
  
    handleChange = value => {
      this.setState({
        value: value
      })
    };
  
    handleChangeComplete = () => {
      console.log('Change event completed')
    };
  
    render () {
      const { value } = this.state
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
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
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
  }
  
export default CoachFormTwo;