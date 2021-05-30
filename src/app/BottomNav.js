import React from 'react';

export function BottomNav({ deleteUser, saveUser }) {
	return (
		<div>
			<button className='btn' onClick={deleteUser}>
				DELETE
			</button>
			<button className='btn' onClick={saveUser}>
				SAVE
			</button>
		</div>
	);
}
