import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';

import reducers from './reducers'

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;