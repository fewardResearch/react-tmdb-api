import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISearchMoviesData } from '../types/data'

interface DataState {
    value: ISearchMoviesData[]
}

const initialState:DataState = {
    value: []
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ISearchMoviesData>) => {
            state.value = [action.payload]
        }
    }
})

export const { setData } = dataSlice.actions
export default dataSlice.reducer