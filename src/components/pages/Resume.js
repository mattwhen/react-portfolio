import React from 'react';
import { Button } from 'react-bootstrap';
import myResume_1 from '../../utils/Current-Resume1024_1.jpg';
import myResume_2 from '../../utils/Current-Resume1024_2.jpg';

export default function Resume() {
	const buttonStyle = {
    textDecoration: 'inherit',
    color: 'inherit',
	};

	return (
		<>
			<div className='resume-container'>
				<img src={myResume_1} alt='My personal resume' className='resume-img' />
				<img src={myResume_2} alt='My personal resume' className='resume-img' />
				<Button variant='primary'>
					<a href='../../utils/Current-Resume.pdf' download style={buttonStyle}>
						{' '}
						Download Resume{' '}
					</a>
				</Button>
			</div>
		</>
	);
}
