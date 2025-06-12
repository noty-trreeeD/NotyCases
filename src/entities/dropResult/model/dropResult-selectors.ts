import type { RootState } from '@/app/store'

export const selectLastDrop = (state: RootState) => state.dropResult.lastDrop
export const selectIsDropOpen = (state: RootState) => state.dropResult.isOpen
