import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import projService from './projService'

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const display = createAsyncThunk('proj/display', async () => {
    await projService.display
})

export const projSlice = createSlice({
    name: 'proj',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(display.pending, (state) => {
            state.isLoading = true
        }).addCase(display.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
    }
})

export const {reset} = projSlice.actions
export default projSlice.reducer
