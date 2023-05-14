import React from 'react';
import ProfilePic from '../../utils/profilePic.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
	return (
		<div className='container-content'>
			<h2 className='header'>About me</h2>
			<Container>
				<Row className='justify-content-md-center'>
					<Col xs={3}>
						<img src={ProfilePic} alt='head capture' id='profile-pic'></img>
					</Col>
					<Col md='5' className='about-section'>
						Hi, welcome to my webpage. My name is Matt, and I am a full-stack
						developer. I like to code, eat, and play video games. I currently
						work in IT any my day-to-day responsibilites include translating
						technical concepts into something that a non-technical user can
						understand, and solving many of their technical complications.
					</Col>
				</Row>
			</Container>
		</div>
	);
}
