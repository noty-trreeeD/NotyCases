import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Case } from '@/shared'

export const fetchCases = createAsyncThunk<Case[]>('case/fetchAll', async () => {
    const response = await fetch('/cases.json')
    if (!response.ok) throw new Error('Ошибка загрузки кейсов')
    return await response.json()
})
