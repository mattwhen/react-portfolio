import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
// We also pass in our state variable (currentPage) and our function to handle the page change (handlePageChange).
function Navigation({ currentPage, handlePageChange }) {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='navbar-header'>
				<a className='navbar-brand' href='#about'>
					Matthew Nguyen
				</a>
        </div>
				<div className='navbar-collapse' id='navbar-link'>
					<ul className='nav navbar-nav'>
						<li className='nav-item'>
							<a
								href='#about'
								onClick={() => handlePageChange('About')}
								// Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
								className={
									currentPage === 'About' ? 'nav-link active' : 'nav-link'
								}
							>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#contact'
								onClick={() => handlePageChange('Contact')}
								// Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
								className={
									currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
								}
							>
								Contact
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#portfolio'
								onClick={() => handlePageChange('Portfolio')}
								// Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
								className={
									currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
								}
							>
								Portfolio
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#resume'
								onClick={() => handlePageChange('Resume')}
								// Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
								className={
									currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
								}
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
