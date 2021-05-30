import React, { useState } from 'react';

export function SearchBar({ filter, setFilter }) {
	const [term, setTerm] = useState(filter);
	return (
		<div>
			<input
				value={term}
				placeholder='type something...'
				onChange={e => setTerm(e.target.value)}
			/>
			<button onClick={() => setFilter(term)}>Filter</button>
		</div>
	);
}
