import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../api/users';

const initialState = users;

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
