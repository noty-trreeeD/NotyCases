import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Skin } from '@/shared'
import type { DropResultState } from './dropResult-types'

const initialState: DropResultState = {
    lastDrop: null,
    isOpen: false,
}

const dropResultSlice = createSlice({
    name: 'dropResult',
    initialState,
    reducers: {
        setDropResult(state, action: PayloadAction<Skin>) {
            state.lastDrop = action.payload
            state.isOpen = true
        },
        clearDropResult(state) {
            state.lastDrop = null
            state.isOpen = false
        },
        closeModal(state) {
            state.isOpen = false
        },
    },
})

export const { setDropResult, clearDropResult, closeModal } = dropResultSlice.actions
export const dropResultReducer = dropResultSlice.reducer
