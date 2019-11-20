import React from 'react';
import CoachCard from './CoachCard.js'
import './CoachList.scss'

const CoachList = () => {
    return(
      <div>
        <h1>Interview Q</h1>
        <div className="search-box">
          Search Information
          <form className="search-form">
            <input placeholder="Search by keyword..." />
            <div>
              <select>
                <option>Hi</option>
              </select>
              <select>
                <option>Hi</option>
              </select>
              <select>
                <option>Hi</option>
              </select>
            </div>
            <button className="search-button">Search</button>
          </form>
        </div>
        <div className="coach-list">
        
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        </div>
      </div>
    )
}

export default CoachList;