import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
	return (
		<div className='container-content'>
			<h2 class='header'>Contact Information</h2>
			<Form className='form-container'>
				<Form.Group className='mb-3' controlId='formGroupName'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='Name' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formGroupEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formGroupMessage' id='message-box'>
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" aria-label="With textarea" placeholder='Message'/>
				</Form.Group>
				<Button variant='primary' type='submit' id='form-button'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default Contact;
