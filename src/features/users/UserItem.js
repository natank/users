import React from 'react';

export function UserItem({ user, currentUserId, currentUserChanged }) {
	return (
		<li onClick={() => currentUserChanged(user._id)}>
			{user.first_name + ' ' + user.last_name}
		</li>
	);
}
