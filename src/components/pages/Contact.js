import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
	// const handleBlurChange = (event) => {
	// 	const userName = 
	// }

	return (
		<div className='container-content'>
			<h2 class='header'>Contact Information</h2>
			<Form className='form-container'>
				<Form.Group className='mb-3' controlId='formGroupName'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='Name' required />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formGroupEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' required />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formGroupMessage' id='message-box'>
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" aria-label="With textarea" placeholder='Message' required/>
				</Form.Group>
				<div className='button-container'>
				<Button variant='primary' type='submit' id='form-button'>
					Submit
				</Button>
				</div>
			</Form>
		</div>
	);
}

export default Contact;
