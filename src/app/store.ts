import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/entities'
import { balanceReducer, caseReducer } from "@/features";
import { dropResultReducer, inventoryReducer} from '@/widgets';

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
