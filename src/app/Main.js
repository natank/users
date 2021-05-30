import React from 'react';
import { UsersList, SingleUser } from '../features/users';

export function Main({
	users,
	fullName,
	setFullName,
	phone,
	setPhone,
	currentUserChanged,
	currentUserId,
	filter,
	setFilter,
}) {
	return (
		<main className='container container--main'>
			<UsersList
				users={users}
				currentUserId={currentUserId}
				currentUserChanged={currentUserChanged}
				filter={filter}
				setFilter={setFilter}
			/>
			<SingleUser
				fullName={fullName}
				setFullName={setFullName}
				phone={phone}
				setPhone={setPhone}
			/>
		</main>
	);
}
