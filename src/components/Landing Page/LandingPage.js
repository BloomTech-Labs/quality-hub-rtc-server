import React from 'react';
import './LandingPage.scss';
import CoachList from '../CoachList/CoachList';

import LandingPageCTA from './LandingPageCTA';
import LandingPageHeader from './LandingPageHeader';

const InterviewLandingPage = ({
	handleChange,
	setCompany,
	setPosition,
	SetPrice,
	SetLocation,
}) => {
	return (
		<div className='interview-landing-page'>
			<LandingPageCTA />
			<LandingPageHeader />

			<div className='Landingpage-contanier'>
				<div className='Search-dropdowns'>
					<input type='text' placeholder='Search by Keyword' />
					<div className='input-label'>
						{/* <label htmlFor='sign-up-state'>Company*</label> */}
						<br />
						<select
							onBlur={() => setCompany(true)}
							id='Interview-dropdown-1'
							name='company'
							placeholder='Company'
							value='company'
							onChange={handleChange}
							required>
							<option>Industry</option>
							<option value='business'>Business</option>
							<option value='education'>Education</option>
							<option value='engineering'>Engineering</option>
							<option value='hr'>Human Resources</option>
							<option value='marketing'>Marketing</option>
							<option value='software'>Software</option>
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
							value='position'
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
							value='price'
							onChange={handleChange}
							required>
							<option>Price</option>
							<option value='$0-$20'>$0-$20</option>
							<option value='$21-$40'>$21-$40</option>
							<option value='$21-$40'>$21-$40</option>
							<option value='$81-$100'>$81-$100</option>
							<option value='$100~'>$100~</option>

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
							value='location'
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
				<div className='Coach-List'>
					<CoachList />
				</div>
			</div>
		</div>
	);
};

export default InterviewLandingPage;
