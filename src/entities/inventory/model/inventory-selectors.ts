import type { RootState } from '@/app/store'

export const selectInventoryItems = (state: RootState) => state.inventory.items
export const selectInventoryCount = (state: RootState) => state.inventory.items.length
