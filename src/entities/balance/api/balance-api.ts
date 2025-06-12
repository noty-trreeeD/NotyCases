import type { Balance } from '@/shared/types'

const BALANCE_KEY = 'user_balance'

export function getBalanceFromStorage(): Balance {
    const stored = localStorage.getItem(BALANCE_KEY)
    if (stored) {
        try {
            return JSON.parse(stored) as Balance
        } catch {
            return { amount: 0 }
        }
    }
    return { amount: 0 }
}

export function saveBalanceToStorage(balance: Balance) {
    localStorage.setItem(BALANCE_KEY, JSON.stringify(balance))
}
