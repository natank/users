import React from 'react';
import './styles/app.scss';
import { TopNav } from './app/TopNav';
import { BottomNav } from './app/BottomNav';
import { Main } from './app/Main';
export default function App() {
	return (
		<main className='app'>
			<TopNav />
			<Main />
			<BottomNav />
		</main>
	);
}
