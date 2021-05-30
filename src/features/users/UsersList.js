import React from 'react';
import { UserItem } from './UserItem';
import { SearchBar } from '../../app/SearchBar';

export function UsersList({
	users,
	currentUserId,
	currentUserChanged,
	filter,
	setFilter,
}) {
	const content = users.map((user, index) => {
		return (
			<UserItem
				user={user}
				currentUserId={currentUserId}
				currentUserChanged={currentUserChanged}
				key={user._id}
			/>
		);
	});

	return (
		<div>
			<SearchBar filter={filter} setFilter={setFilter} />
			<ul className='usersList'>{content}</ul>
		</div>
	);
}
