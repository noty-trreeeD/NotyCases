import type { RootState } from '@/app/store'

export const selectUser = (state: RootState) => state.user.user
export const selectIsLoggedIn = (state: RootState) => Boolean(state.user.user)
