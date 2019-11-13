import React from 'react';
import NavBar from '../NavBar';
import './LandingPage.scss';
import CoachList from '../CoachList/CoachList.js'

const InterviewLandingPage = () => {

    return(
        <div className="interview-landing-page">
            <div className="interview-cta">
            <button>X</button>
                <h4>Are you interested in becoming a coach? Become a coach now</h4>
            </div>
            <div className="interview-header">
            <button>X</button>
                <h1>Interview Q</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dictum adipiscing amet, sollicitudin arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dictum adipiscing amet, sollicitudin arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dictum adipiscing amet, sollicitudin arcu.</h3>
            </div>
            <CoachList />
        </div>
    )
}

export default InterviewLandingPage;