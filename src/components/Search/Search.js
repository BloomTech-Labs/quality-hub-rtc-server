import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import './Search.scss';

const GET_INDUSTRIES = gql`
  query {
    industries {
      name
    }
  }
`;


export default function Search({fields, setFields}) {
	const { loading, error, data } = useQuery(GET_INDUSTRIES);
	const [company, setCompany] = useState();
	
	const handleChange = (e) => {
		console.log(fields);
		e.preventDefault();
		setFields({ ...fields, [e.target.name]: e.target.value });
	};

	return (
		<div className='search-dropdowns'>
			<div className='search-field'>
				{/* <label htmlFor='sign-up-state'>Company*</label> */}
				<label>Industry</label>
				<select
					onBlur={() => setCompany(true)}
					id='Interview-dropdown-1'
					name='industry'
					placeholder='Industry'
					onChange={handleChange}
					required>
					<option value="">All</option>
					{data && data.industries.map(({name}) => <option value={name}>{name}</option>)}
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
				<input type='text' name="tag" onChange={handleChange} placeholder='Search by Keyword' />
			</div>
			<button className='search-reset'>Reset Filters</button>
			<button className='search-apply'>Apply</button>
		</div>
	);
}
