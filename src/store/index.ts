import {configureStore} from "@reduxjs/toolkit";
import {vinDecoderApi} from "./vinDecoderApi/vinDecoder.api";
import {vinDecoderReducers} from "./vinDecoder.slice";
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        [vinDecoderApi.reducerPath]: vinDecoderApi.reducer,
        vinDecoder: vinDecoderReducers
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), vinDecoderApi.middleware, thunk]
})
export type RootState = ReturnType<typeof store.getState>

