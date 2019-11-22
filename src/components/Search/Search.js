import React, { useState } from 'react';
import './Search.scss';

export default function Search() {
	const [company, setCompany] = useState();
	const handleChange = () => {};

	return (
		<div className='search-dropdowns'>
			<div className='search-field'>
				{/* <label htmlFor='sign-up-state'>Company*</label> */}
				<label>Industry</label>
				<select
					onBlur={() => setCompany(true)}
					id='Interview-dropdown-1'
					name='company'
					placeholder='Company'
					value='company'
					onChange={handleChange}
					required>
					<option>All</option>
					{/* <option value='business'>Business</option>
					<option value='education'>Education</option>
					<option value='engineering'>Engineering</option>
					<option value='hr'>Human Resources</option>
					<option value='marketing'>Marketing</option>
					<option value='software'>Software</option> */}
					{/* {companyArray.map(company => (
      <option value={state} key={state}>
        {state}
      </option>
    ))} */}
				</select>
			</div>
			<div className='search-field'>
				<label>Position</label>
				<select
					onBlur={() => setCompany(true)}
					id='Interview-dropdown-1'
					name='postion'
					placeholder='Position'
					value='position'
					onChange={handleChange}
					required>
					<option>All</option>
					{/* {companyArray.map(company => (
      <option value={state} key={state}>
        {state}
      </option>
    ))} */}
				</select>
			</div>
			<div className='search-field'>
				<label>Price</label>
				<select
					onBlur={() => setCompany(true)}
					id='Interview-dropdown-1'
					name='price'
					placeholder='Price'
					value='price'
					onChange={handleChange}
					required>
					<option>All</option>
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
			{/* <div className='input-label'>
				<select
					onBlur={() => setCompany(true)}
					id='Interview-dropdown-1'
					name='location'
					placeholder='Location'
					value='location'
					onChange={handleChange}
					required>
					<option>Location</option>
				</select>
			</div> */}
			<div className='search-field-keyword'>
				<label>Keywords</label>
				<input type='text' placeholder='Search by Keyword' />
			</div>
			<button className='search-reset'>Reset Filters</button>
			<button className='search-apply'>Apply</button>
		</div>
	);
}
