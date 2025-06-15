import type { User } from '@/shared'

const BALANCE_KEY = 'user_balance'

export function getBalanceFromStorage(): User {
    const stored = localStorage.getItem(BALANCE_KEY)
    if (stored) {
        try {
            return JSON.parse(stored) as User
        } catch {
            return {
                id: '',
                username: '',
                balance: 0,
            }
        }
    }
    return {
        id: '',
        username: '',
        balance: 0,
    }
}

export function saveBalanceToStorage(user: User) {
    localStorage.setItem(BALANCE_KEY, JSON.stringify(user))
}
