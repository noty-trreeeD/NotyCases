import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/shared'
import { getBalanceFromStorage, saveBalanceToStorage } from '../api/balance-api'

interface BalanceState {
    balance: User
    loading: boolean
    error: string | null
}

const initialState: BalanceState = {
    balance: getBalanceFromStorage(),
    loading: false,
    error: null,
}

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        setBalance(state, action: PayloadAction<number>) {
            state.balance.balance = action.payload
            saveBalanceToStorage(state.balance)
        },
        addBalance(state, action: PayloadAction<number>) {
            state.balance.balance += action.payload
            saveBalanceToStorage(state.balance)
        },
        subtractBalance(state, action: PayloadAction<number>) {
            state.balance.balance = Math.max(0, state.balance.balance - action.payload)
            saveBalanceToStorage(state.balance)
        },
        setUser(state, action: PayloadAction<User>) {
            state.balance = action.payload
            saveBalanceToStorage(state.balance)
        },
    },
})

export const { setBalance, addBalance, subtractBalance, setUser } = balanceSlice.actions
export const balanceReducer = balanceSlice.reducer
