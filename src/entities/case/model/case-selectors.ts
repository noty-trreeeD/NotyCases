import type {RootState} from '@/app/store'

export const selectCases = (state: RootState) => state.case.cases
export const selectCasesLoading = (state: RootState) => state.case.loading
export const selectCasesError = (state: RootState) => state.case.error
export const selectCaseById = (id: string | number) => (state: RootState) =>
    state.case.cases.find(c => c.id === id)
