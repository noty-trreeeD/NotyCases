import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CaseState, fetchCases } from '@/features'
import type { Case } from '@/shared'

const initialState: CaseState = {
    cases: [],
    loading: false,
    error: null,
}

const caseSlice = createSlice({
    name: 'case',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCases.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCases.fulfilled, (state, action: PayloadAction<Case[]>) => {
                state.loading = false
                state.cases = action.payload
            })
            .addCase(fetchCases.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Unknown error'
            })
    },
})

export const caseReducer = caseSlice.reducer
