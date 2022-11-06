import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateData } from './interfaceSlice';


export const pagenationSlice = createSlice({
	name: 'pagination',
	initialState: initialStateData,
	reducers: {
		newPage(state, { payload }: PayloadAction<number>) {
			state.first += payload;
			state.last +=  payload;
		},
		prevPage(state, { payload }: PayloadAction<number>) {
			state.first -= payload;
			state.last -=  payload;
		},
		search(state, { payload }: PayloadAction<string>) {
			state.pais = payload;
		}

	}
});


export const { newPage, prevPage, search} = pagenationSlice.actions;
export const pagenationReducer = pagenationSlice.reducer;