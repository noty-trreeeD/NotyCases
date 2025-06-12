import { useAppSelector } from '@/shared'
import { selectBalanceAmount } from '@/entities'

export const Balance = () => {
    const balance = useAppSelector(selectBalanceAmount)

    return (
        <div style={{ marginBottom: 16 }}>
            <strong>Баланс: </strong> {balance}$
        </div>
    )
}
