import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared'
import { fetchCases, selectCases, selectCasesLoading, selectCasesError } from '@/entities/case'
import { CaseCard } from './CaseCard'
import { Balance } from './Balance'
import { Inventory } from './Inventory'

export const CaseOpeningPage = () => {
    const dispatch = useAppDispatch()
    const cases = useAppSelector(selectCases)
    const loading = useAppSelector(selectCasesLoading)
    const error = useAppSelector(selectCasesError)

    useEffect(() => {
        dispatch(fetchCases())
    }, [dispatch])

    return (
        <div style={{ padding: 24 }}>
            <Balance />
            {loading && <p>Загрузка кейсов...</p>}
            {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {cases.map(c => (
                    <CaseCard key={c.id} caseData={c} />
                ))}
            </div>
            <hr style={{ margin: '24px 0' }} />
            <Inventory />
        </div>
    )
}
