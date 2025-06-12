import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UserState } from './user-types'
import type { User } from '@/shared'
import { loadUser } from '../api/user-api'

const initialState: UserState = {
    user: loadUser(),
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
