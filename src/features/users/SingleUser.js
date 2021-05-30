import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

export function SingleUser({ user }) {
	const [fullName, setFullName] = useState(
		user ? `${user.first_name} ${user.last_name}` : ''
	);
	const [phone, setPhone] = useState(user ? user.phone_number : '');
	return (
		<div className='singleUser'>
			<h1 className='title'>details</h1>
			<hr />
			<form>
				<div>
					<label for='name'>Full Name</label>
					<input
						id='name'
						value={fullName}
						onChange={e => setFullName(e.target.value)}
					/>
				</div>
				<div>
					<label for='phone'>Phone Number</label>
					<input
						id='phone'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
}
