import React from 'react';
import './LandingPage.scss';

import LandingPageCTA from './LandingPageCTA';
import LandingPageHeader from './LandingPageHeader';
import QNav from '../QNav';
import Search from '../Search';
import CoachList from '../CoachList/CoachList';

export default function InterviewLandingPage() {
	return (
		<div className='interview-container'>
			<LandingPageCTA />
			<div className='interview-landing-page'>
				<LandingPageHeader />
				<QNav />

				<div className='landingpage-content'>
					<Search />
					<div className='Coach-List'>
						<CoachList />
					</div>
				</div>
			</div>
		</div>
	);
}
