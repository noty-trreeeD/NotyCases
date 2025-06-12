import type { User } from '@/shared'

const USER_KEY = 'user'

export function loadUser(): User | null {
    try {
        const data = localStorage.getItem(USER_KEY)
        return data ? JSON.parse(data) : null
    } catch {
        return null
    }
}

export function saveUser(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function clearUser() {
    localStorage.removeItem(USER_KEY)
}
