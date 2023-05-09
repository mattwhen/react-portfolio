import React from 'react';
import thingamabobs from '../../utils/thingamabobs-live-screenshot.png';
import cultureCruncher from '../../utils/cultureCruncher-live-app.png';
import Image from 'react-bootstrap/Image';

export default function Portfolio() {
	return (
		<>
			<img
				className='project1 rounded'
				src={cultureCruncher}
				alt='screenshot of live app'
			/>
      <img
				className='project2 rounded'
				src={thingamabobs}
				alt='screenshot of live app'
			/>
		</>
	);
}
