import type { AppDispatch, RootState } from '@/app/store'
import { addItem, setDropResult } from '@/widgets'
import { subtractBalance } from '@/features'
import type { Case, Skin } from '@/shared'

export const openCase = (caseItem: Case) => (dispatch: AppDispatch, getState: () => RootState) => {
    const loot = caseItem.loot
    if (!loot.length) return

    const { balance } = getState().balance.balance
    if (balance < caseItem.price) {
        alert('Недостаточно средств для открытия кейса')
        return
    }

    dispatch(subtractBalance(caseItem.price))

    const randomIndex = Math.floor(Math.random() * loot.length)
    const selectedSkin: Skin = loot[randomIndex]

    dispatch(setDropResult(selectedSkin))
    dispatch(addItem(selectedSkin))
}
