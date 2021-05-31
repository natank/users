import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

export function SearchBar({ filter, setFilter }) {
	const [term, setTerm] = useState(filter);

	return (
		<div className='search'>
			<input
				value={filter}
				placeholder='type something...'
				onChange={e => setFilter(e.target.value)}
			/>
			<button onClick={() => setFilter('')}><FaSearch/></button>
		</div>
	);
}
