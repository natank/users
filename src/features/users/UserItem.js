import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function UserItem({ user }) {
	return (
		<li onClick={() => user._id}>{user.first_name + '' + user.last_name}</li>
	);
}
