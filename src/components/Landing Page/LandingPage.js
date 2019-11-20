import React from 'react';
import NavBar from '../NavBar';
import './LandingPage.scss';
import CoachList from '../CoachList/CoachList.js'
import {Link} from 'react-router-dom'

const InterviewLandingPage = ({
    handleChange,
    setCompany, 
    setPosition,
    SetPrice,
    SetLocation,
}) => {
 

 return(
        <div className="interview-landing-page">
            <div className="interview-cta">
            
                <h4>Are you interested in becoming a coach? <Link to='/addcoach'>Become a coach now</Link></h4>
				<button>X</button>
            </div>
            <div className="interview-header">
                <h1>Interview Q</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dictum adipiscing amet, sollicitudin arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dictum adipiscing amet, sollicitudin arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dictum adipiscing amet, sollicitudin arcu.</h3>
				<br/>
				<button>X</button>
            </div>

        <div className="Landingpage-contanier">
            <div className="Search-dropdowns">
            <input type="text" placeholder="Search by Keyword"  />
                <div className='input-label'>
					{/* <label htmlFor='sign-up-state'>Company*</label> */}
					<br />
					<select
						onBlur={() => setCompany(true)}
						id='Interview-dropdown-1'
						name='company'
						placeholder='Company'
						value="company"
						onChange={handleChange}
						required>
						<option>Company</option>
						{/* {companyArray.map(company => (
							<option value={state} key={state}>
								{state}
							</option>
						))} */}
					</select>
				</div>
                <div className='input-label'>
					<select
						onBlur={() => setCompany(true)}
						id='Interview-dropdown-1'
						name='postion'
						placeholder='Position'
						value="position"
						onChange={handleChange}
						required>
						<option>Position</option>
						{/* {companyArray.map(company => (
							<option value={state} key={state}>
								{state}
							</option>
						))} */}
					</select>
				</div>
                <div className='input-label'>
					<select
						onBlur={() => setCompany(true)}
						id='Interview-dropdown-1'
						name='price'
						placeholder='Price'
						value="price"
						onChange={handleChange}
						required>
						<option>Price</option>
						{/* {companyArray.map(company => (
							<option value={state} key={state}>
								{state}
							</option>
						))} */}
					</select>
				</div>
                <div className='input-label'>
					<select
						onBlur={() => setCompany(true)}
						id='Interview-dropdown-1'
						name='location'
						placeholder='Location'
						value="location"
						onChange={handleChange}
						required>
						<option>Location</option>
						{/* {companyArray.map(company => (
							<option value={state} key={state}>
								{state}
							</option>
						))} */}
					</select>
                    </div>
				</div>
            <div className="Coach-List">
                <CoachList />
                </div>
            </div>
            
        </div>
    )
}

export default InterviewLandingPage;