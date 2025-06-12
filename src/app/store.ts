import { configureStore } from '@reduxjs/toolkit'
import {caseReducer, userReducer, dropResultReducer, inventoryReducer, balanceReducer} from '@/entities'

export const store = configureStore({
    reducer: {
        case: caseReducer,
        user: userReducer,
        dropResult: dropResultReducer,
        inventory: inventoryReducer,
        balance: balanceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
