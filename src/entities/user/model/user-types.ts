import type { User } from '@/shared'

export interface UserState {
    user: User | null
    balance: number
}
