import React from 'react';

export function TopNav({ currentUserChanged }) {
	return (
		<div className='section topNav'>
			<button
				className='btn btn--selected'
				onClick={() => {
					currentUserChanged(null);
				}}>
				ADD USER
			</button>
		</div>
	);
}
