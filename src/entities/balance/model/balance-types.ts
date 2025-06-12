import type { Balance } from '@/shared/types'

export interface BalanceState {
    balance: Balance
    loading: boolean
    error?: string | null
}