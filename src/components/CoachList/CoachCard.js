import React from 'react';
import './CoachCard.scss'

const CoachCard = ({post}) => {
  console.log(post);
    return(
        <div className="coach-card">
            <div className="coach-photo">
                <img src="https://www.birdorable.com/img/bird/th440/california-quail.png" />
            </div>
            <div className="coach-text">
              <div className="flex-sect">
                <div className="left-side">
                    <h3>Coach Name</h3>
                    <h4>{post.position} Sunnyvale, CA</h4>
                    <p>{post.description}</p>
                </div>
                <div className="right-side">
                    <h4><span>&#x2605; 4.9</span>   ${post.price} / hour</h4>


                </div>
              </div>
              <div className="footer">
                <p>Links go here</p>
                <button className="interview-button" disabled>Request Interview</button>
              </div>
            </div>
        </div>
    )
}

export default CoachCard;