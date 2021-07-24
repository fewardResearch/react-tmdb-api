import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IMovieData } from '../types/data'

interface DataState {
    value: IMovieData[]
}

const initialState:DataState = {
    value: []
};

export const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState,
    reducers: {
        setPopularMovies: (state, action: PayloadAction<IMovieData>) => {
            state.value = [action.payload]
        }
    }
})

export const { setPopularMovies } = popularMoviesSlice.actions
export default popularMoviesSlice.reducer