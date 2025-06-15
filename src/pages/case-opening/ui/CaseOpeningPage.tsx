import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared'
import { CaseList, fetchCases, selectCasesLoading, selectCasesError } from '@/features'
import { Inventory } from '@/widgets'

export const CaseOpeningPage = () => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(selectCasesLoading)
    const error = useAppSelector(selectCasesError)

    useEffect(() => {
        dispatch(fetchCases())
    }, [dispatch])

    return (
        <div style={{ padding: 24 }}>
            {loading && <p>Загрузка кейсов...</p>}
            {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
            <CaseList/>
            <Inventory />
        </div>
    )
}
