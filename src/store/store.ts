import { configureStore } from '@reduxjs/toolkit';
import { pagenationReducer } from './interfaces/pagenations/reducer';


export const store = configureStore({
	reducer: {
		pagenation: pagenationReducer,
	}
});

export type  RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch