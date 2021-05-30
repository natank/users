import React from 'react';

export function TopNav({ currentUserChanged }) {
	return (
		<div className='topNav'>
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
