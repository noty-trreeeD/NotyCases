import type {AppDispatch} from '@/app/store'
import { setDropResult } from '@/entities/dropResult/model/dropResult-slice'
import { addItem } from '@/entities'
import type { Case, Skin } from '@/shared'

export const openCase = (caseItem: Case) => (dispatch: AppDispatch) => {
    const loot = caseItem.loot
    if (!loot.length) return

    const randomIndex = Math.floor(Math.random() * loot.length)
    const selectedSkin: Skin = loot[randomIndex]

    dispatch(setDropResult(selectedSkin))

    dispatch(addItem(selectedSkin))
}
