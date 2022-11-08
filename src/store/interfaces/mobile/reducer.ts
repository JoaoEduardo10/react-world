import { createSlice } from '@reduxjs/toolkit';

import { initialStateShow } from  './interfaceSlice';


const showSlice = createSlice({
	name: 'show',
	initialState: initialStateShow,
	reducers: {
		reverseShow(state) {
			state.show = !state.show;
		}
	}
});

export const { reverseShow } = showSlice.actions;
export const showReducer = showSlice.reducer;