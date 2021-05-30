import React from 'react';
import { UsersList, SingleUser } from '../features/users';

export function Main() {
	return (
		<main className='container container--main'>
			<UsersList />
			<SingleUser />
		</main>
	);
}
