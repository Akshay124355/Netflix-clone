import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        addPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addPlayingMovies = action.payload;
        },
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovies } = moviesSlice.actions;