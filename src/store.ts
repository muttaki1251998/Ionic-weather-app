import { configureStore } from "@reduxjs/toolkit";
import locationReducer from './components/LocationSlice';

export const store = configureStore({
    reducer: {
       location: locationReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;