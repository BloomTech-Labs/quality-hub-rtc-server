import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CoachCard from './CoachCard.js'
import './CoachList.scss'

const GET_POSTS = gql`
  query {
    posts {
      price
      position
      description
    }
  }
`

const CoachList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
    return(
      <div className="coach-list-container">
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
        <hr />
        { data && <div className="coach-list">
          {data.posts.map(post => 
            <CoachCard post={post} />
          )}

        </div>
      }
      </div>
    )
}

export default CoachList;