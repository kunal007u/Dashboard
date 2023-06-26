import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentThemeState {
    theme: 'dark' | 'light';
}

const initialState: CurrentThemeState = {
    theme: 'light',
};

export const CurrentThemeSlice = createSlice({
    name: 'currentTheme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleTheme} = CurrentThemeSlice.actions

export default CurrentThemeSlice.reducer