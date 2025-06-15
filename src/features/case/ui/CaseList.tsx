import {useEffect} from 'react'
import {useAppDispatch, useAppSelector, type Case} from '@/shared'
import {fetchCases, selectCases, selectCasesLoading, selectCasesError} from '@/features'
import {CaseCard} from './CaseCard'

export const CaseList = () => {
    const dispatch = useAppDispatch()
    const cases = useAppSelector(selectCases)
    const loading = useAppSelector(selectCasesLoading)
    const error = useAppSelector(selectCasesError)

    useEffect(() => {
        dispatch(fetchCases())
    }, [dispatch])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error}</p>

    return (
        <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            {cases.map((casesList: Case) => (
                <CaseCard key={casesList.id} caseData={casesList}/>
            ))}
        </div>
    )
}