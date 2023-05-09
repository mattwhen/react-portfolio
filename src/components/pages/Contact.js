import Form from 'react-bootstrap/Form';

function Contact() {
	return (
		<div>
			<h2 class='header'>Contact Me!</h2>
			<Form>
				<Form.Group className='mb-3' controlId='formGroupEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formGroupPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
			</Form>
		</div>
	);
}

export default Contact;
