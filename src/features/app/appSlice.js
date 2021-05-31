import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUserId: null,
  fullName: '',
  phone: '',
  filter: ''
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers:{
    currentUserIdUpdated(state, action){
      state.currentUserId = action.payload;
    },
    fullNameChanged(state, action){
      state.fullName = action.payload
    },
    phoneChanged(state, action){
      state.phone = action.payload
    },
    filterChanged(state, action){
      state.filter = action.payload
    }
  }
})
