import React from 'react';

export function BottomNav({ deleteUser, saveUser }) {
	return (
		<div className="section, bottomNav">
			<button className='btn' onClick={deleteUser}>
				DELETE
			</button>
			<button className='btn btn--save' onClick={saveUser}>
				SAVE
			</button>
		</div>
	);
}
