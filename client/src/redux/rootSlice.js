import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        loading: false,
        reloadData: false,
        portfolioData: null
    },
    reducers: {
        ShowLoading: (state, action) => {
            state.loading = true
        },
        HideLoading: (state, action) => {
            state.loading = false
        },
        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload
        },
        ReloadData: (state, action) => {
            state.reloadData = action.payload
        }
    }
})

export const {
    ShowLoading,
    HideLoading,
    SetPortfolioData,
    ReloadData
} = rootSlice.actions
export default rootSlice.reducer
