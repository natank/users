import React, { useState } from 'react';
import './styles/index.scss';
import { TopNav } from './app/TopNav';
import { BottomNav } from './app/BottomNav';
import { Main } from './app/Main';
import { users as initialState } from './api/index';

const sorter = (a, b) => {
	var nameA = a.first_name.toLowerCase(),
		nameB = b.first_name.toLowerCase();
	if (nameA < nameB)
		//sort string ascending
		return -1;
	if (nameA > nameB) return 1;
	return 0; //default return value (no sorting)
};

export default function App() {
	/**Local state */

	const [users, setUsers] = useState([...initialState].sort(sorter));
	const [currentUserId, setCurrentUserId] = useState(null);
	const [fullName, setFullName] = useState('');
	const [phone, setPhone] = useState('');
	const [filter, setFilter] = useState('');

	const filterUser = user => {
		if (
			user.first_name.toLowerCase().includes(filter.toLowerCase()) ||
			user.last_name.toLowerCase().includes(filter.toLowerCase())
		) {
			return true;
		}
		return false;
	};
	const currentUserChanged = _id => {
		setCurrentUserId(_id);
		const currentUser = users.find(user => user._id === _id);
		if (currentUser) {
			setFullName(currentUser.first_name + ' ' + currentUser.last_name);
			setPhone(currentUser.phone_number);
		} else {
			setFullName('');
			setPhone('');
		}
	};

	const addUser = () => {
		const _id = 1000000 + Math.floor(Math.random() * 8999999);
		const fullNameArr = fullName.split(' ');
		const first_name = fullNameArr[0] ? fullNameArr[0] : '';
		const last_name = fullNameArr[1] ? fullNameArr[1] : '';
		const phone_number = phone;
		const newUser = { _id, first_name, last_name, phone_number };

		setUsers([...users, newUser].sort(sorter));
	};

	const saveUser = () => {
		if (!currentUserId) addUser();
		else {
			const tempUsers = users.filter(user => user._id !== currentUserId);
			const fullNameArr = fullName.split(' ');
			const first_name = fullNameArr[0] ? fullNameArr[0] : '';
			const last_name = fullNameArr[1] ? fullNameArr[1] : '';
			const phone_number = phone;
			const updatedUser = {
				_id: currentUserId,
				first_name,
				last_name,
				phone_number,
			};

			setUsers([...tempUsers, updatedUser]);
		}
	};

	const deleteUser = () => {
		setUsers(users.filter(user => user._id !== currentUserId));
		currentUserChanged(null);
	};

	return (
		<main className='app'>
			<TopNav
				currentUserChanged={currentUserChanged}
				className='section topNav'
			/>
			<Main
				className='section topNav'
				users={users.filter(filterUser)}
				fullName={fullName}
				setFullName={setFullName}
				phone={phone}
				setPhone={setPhone}
				currentUserChanged={currentUserChanged}
				currentUserId={currentUserId}
				filter={filter}
				setFilter={setFilter}
			/>
			<BottomNav
				deleteUser={deleteUser}
				saveUser={saveUser}
				className='section bottomNav'
			/>
		</main>
	);
}
