import React from 'react';

export function UserItem({ user, currentUserId, currentUserChanged }) {
	const selected = user._id === currentUserId ? "selected": null;
	return (
		<li className={selected} onClick={() => currentUserChanged(user._id)}>
			{user.first_name + ' ' + user.last_name}
		</li>
	);
}
