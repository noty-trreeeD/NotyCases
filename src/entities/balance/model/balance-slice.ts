import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { BalanceState } from './balance-types'
import { getBalanceFromStorage, saveBalanceToStorage } from '../api/balance-api'

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
            state.balance.amount = action.payload
            saveBalanceToStorage(state.balance)
        },
        addBalance(state, action: PayloadAction<number>) {
            state.balance.amount += action.payload
            saveBalanceToStorage(state.balance)
        },
        subtractBalance(state, action: PayloadAction<number>) {
            state.balance.amount = Math.max(0, state.balance.amount - action.payload)
            saveBalanceToStorage(state.balance)
        },
    },
})

export const { setBalance, addBalance, subtractBalance } = balanceSlice.actions
export const balanceReducer = balanceSlice.reducer
