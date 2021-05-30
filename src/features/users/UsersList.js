import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UserItem } from './UserItem';

export function UsersList() {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users);

	const content = users.map((user, index) => {
		return <UserItem user={user} />;
	});

	return <ul className='usersList'>{content}</ul>;
}
