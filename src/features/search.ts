import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IMovieData } from '../types/data'

interface DataState {
    value: IMovieData[]
}

const initialState:DataState = {
    value: []
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<IMovieData>) => {
            state.value = [action.payload]
        }
    }
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer