import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import projService from './projService'

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    projects: []
}

export const display = createAsyncThunk('proj/display', async () => {
    console.log("awaiting display projects slice")
    await projService.display()
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
        }).addCase(display.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.projects = action.payload
        })
    }
})

export const {reset} = projSlice.actions
export default projSlice.reducer
