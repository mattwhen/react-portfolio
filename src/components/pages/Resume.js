import React from 'react';
import { Button } from 'react-bootstrap';
import myResume_1 from '../../utils/Current-Resume1024_1.jpg';
import myResume_2 from '../../utils/Current-Resume1024_2.jpg';

export default function Resume() {
	// const buttonStyle = {
	// 	textDecoration: 'inherit',
	// 	color: 'inherit',
	// };

	return (
		<>
			<div className='resume'>
				<a href='https://docs.google.com/document/d/1T551yPK1OGZIGVlfL3N4OmPsiL8Me3Vy_8FndueXiO8/edit'>
				<Button variant='primary'>Link to Resume</Button>
				</a>
				
			</div>
			<div className='resume-container'>
				<img src={myResume_1} alt='My personal resume' className='resume-img' />
				<img src={myResume_2} alt='My personal resume' className='resume-img' />
			</div>
		</>
	);
}
