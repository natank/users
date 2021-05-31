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
		<aside className= "content aside">
			<SearchBar filter={filter} setFilter={setFilter} />
			<ul className='aside__list'>{content}</ul>
		</aside>
	);
}
