import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {loadUser, type UserState } from '@/entities'
import type { User } from '@/shared'

const initialState: UserState = {
    user: loadUser(),
    balance: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
        clearUser(state) {
            state.user = null
        },
    },
})

export const { setUser, clearUser } = userSlice.actions
export const userReducer = userSlice.reducer
