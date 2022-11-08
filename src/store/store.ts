import { configureStore } from '@reduxjs/toolkit';
import { showReducer } from './interfaces/mobile/reducer';
import { pagenationReducer } from './interfaces/pagenations/reducer';


export const store = configureStore({
	reducer: {
		pagenation: pagenationReducer,
		show: showReducer,
	}
});

export type  RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch