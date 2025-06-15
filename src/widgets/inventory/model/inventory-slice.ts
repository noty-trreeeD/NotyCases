import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { InventoryState } from './inventory-types'
import type {Skin} from "@/shared";

const LOCAL_STORAGE_KEY = 'inventory'

const loadFromLocalStorage = (): InventoryState => {
    try {
        const serialized = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (!serialized) return { items: [] }
        return JSON.parse(serialized)
    } catch {
        return { items: [] }
    }
}

const saveToLocalStorage = (state: InventoryState) => {
    try {
        const serialized = JSON.stringify(state)
        localStorage.setItem(LOCAL_STORAGE_KEY, serialized)
    } catch { /* empty */ }
}

const initialState: InventoryState = loadFromLocalStorage()

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Skin>) {
            state.items.push(action.payload)
            saveToLocalStorage(state)
        },
        removeItem(state, action: PayloadAction<string | number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
            saveToLocalStorage(state)
        },
        clearInventory(state) {
            state.items = []
            saveToLocalStorage(state)
        },
        setInventory(state, action: PayloadAction<Skin[]>) {
            state.items = action.payload
            saveToLocalStorage(state)
        },
    },
})

export const { addItem, removeItem, clearInventory, setInventory } = inventorySlice.actions
export const inventoryReducer = inventorySlice.reducer
