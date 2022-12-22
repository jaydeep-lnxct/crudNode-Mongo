
import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {value: []},
    reducers: {
        addUserAction(state, actions){
            state.value = actions.payload
        },
    },
})

export const {addUserAction} = userSlice.actions;
export const userReducer = userSlice.reducer