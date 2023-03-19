import { configureStore } from '@reduxjs/toolkit';
import {  multitableSlice, authSlice } from './';


export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        multitable: multitableSlice.reducer,
        // ui:       uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})