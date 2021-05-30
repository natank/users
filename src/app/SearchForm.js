import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import { fetchSongs } from '../features/users';
const useStyles = makeStyles(theme => ({
	root: {
		width: '50%',
		margin: 'auto',
		marginBottom: '1rem',
	},
}));

export const SearchForm = () => {
	const classes = useStyles();
	const [filter, setFilter] = useState('');
	return (
		<SearchBar
			className={classes.root}
			onChange={e => {
				setFilter(e.target ? e.target.value : '');
			}}
			value={filter}
			onRequestSearch={() => {
				fetchSongs(filter);
			}}
			placeholder='Type something ...'
			autoFocus
		/>
	);
};
