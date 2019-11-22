import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPageCTA() {
	const [ctaShow, setCtaShow] = useState(true);

	return (
		<div>
			{ctaShow && (
				<div className='interview-cta'>
					<div className='interview-cta-center'>
						<h4>
							Are you interested in becoming a coach?{' '}
							<Link to='/addcoach'>Click here</Link>
						</h4>
					</div>
					<button className='interview-cta-x' onClick={() => setCtaShow(false)}>
						X
					</button>
				</div>
			)}
		</div>
	);
}
