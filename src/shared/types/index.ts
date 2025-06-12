export type ID = string | number
export type SkinRarity =
    | 'ширпотреб'
    | 'промышленное качество'
    | 'армейское качество'
    | 'запрещенное'
    | 'засекреченное'
    | 'тайное'
    | 'крайне редкий предмет'

export interface Skin {
    id: ID
    name: string
    rarity: SkinRarity
    image: string
    price: number
}

export interface Case {
    id: ID
    name: string
    loot: Skin[]
    imageUrl: string
    price: number | 0
}

export interface ApiResponse<T> {
    data: T
    status: number
    error?: string
}

export interface User {
    id: string | number
    username: string
    avatarUrl?: string
    balance: number
}
