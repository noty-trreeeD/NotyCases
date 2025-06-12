import { useAppSelector, useAppDispatch } from '@/shared'
import { selectBalanceAmount, setBalance } from '@/entities'

export const Balance = () => {
    const balance = useAppSelector(selectBalanceAmount)
    const dispatch = useAppDispatch()

    return (
        <div style={{ marginBottom: 16 }}>
            <strong>Баланс: </strong> {balance.toFixed(2)}$
            <button onClick={() => {
                dispatch(setBalance(balance + 1000))
            }}>
                add 0.1$
            </button>
        </div>
    )
}
