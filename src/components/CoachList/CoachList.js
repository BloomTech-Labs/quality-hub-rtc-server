import React from 'react';
import CoachCard from './CoachCard.js'
import './CoachList.scss'

const CoachList = () => {
    return(
        <div className="coach-list">
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        </div>
    )
}

export default CoachList;