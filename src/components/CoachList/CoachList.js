import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

<<<<<<< HEAD
import CoachCard from './CoachCard'
import FilterList from './FilterList';
import './CoachList.scss'

const GET_POSTS = gql`
  query {
    posts {
      price
      position
      description
      industry {
        name
      }
      tags {
        name
      }
      coach {
        first_name
        last_name
        city
        state
        image_url
        personal_url
        blog_url
        twitter_url
        portfolio_url
        linkedin_url
        github_url
      }
    }
  }
`

const CoachList = () => {
  const [fields, setFields] = useState({tag:"", price: "", industry: "", orderBy: ""})
  const [fetchPosts, { loading, error, data }] = useLazyQuery(GET_POSTS, {variables: fields})

  useEffect(() => {
    fetchPosts();
  },[])

    return(
      <div className="coach-list-container">
        <h1>Interview Q</h1>
        <div className="search-box">
          Search Information
          <FilterList fields={fields} setFields={setFields}/>
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
=======
import CoachCard from './CoachCard.js';
import './CoachList.scss';

const GET_POSTS = gql`
	query {
		posts {
			price
			position
			description
		}
	}
`;

const CoachList = () => {
	const { loading, error, data } = useQuery(GET_POSTS);

	return (
		<div className='coach-list-container'>
			{/* <h1>Interview Q</h1>
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
        </div> */}
			{/* <hr /> */}
			{data && (
				<div className='coach-list'>
					{data.posts.map(post => (
						<CoachCard post={post} />
					))}
				</div>
			)}
		</div>
	);
};
>>>>>>> 0d181d5a2d049c887df692e7cda4fe788661dbd8

export default CoachList;
