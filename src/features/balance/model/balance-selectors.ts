import type { RootState } from '@/app/store'

export const selectBalanceAmount = (state: RootState) => state.balance.balance.balance
export const selectBalanceLoading = (state: RootState) => state.balance.loading
export const selectBalanceError = (state: RootState) => state.balance.error
export const selectCurrentUser  = (state: RootState) => state.balance.balance
