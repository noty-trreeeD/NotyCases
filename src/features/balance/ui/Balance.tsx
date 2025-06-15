import { useAppSelector, useAppDispatch } from '@/shared'
import { selectBalanceAmount, setBalance } from '@/features'
import styles from '../styles/Balance.module.scss'

export const Balance = () => {
    const balance = useAppSelector(selectBalanceAmount)
    const dispatch = useAppDispatch()
    const addingBalance = 1000

    return (
        <div className={styles.balance}>
            <span>Баланс: {balance.toFixed(2)}$</span>
            <button onClick={() => {
                dispatch(setBalance(balance + addingBalance))
            }}>
                add 0.1$
            </button>
        </div>
    )
}
