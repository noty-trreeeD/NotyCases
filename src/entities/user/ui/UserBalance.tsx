import { useAppSelector } from '@/shared'
import { selectUser } from '@/entities/user'

export const UserBalance = () => {
    const user = useAppSelector(selectUser)

    if (!user || user.balance == null) return null

    return <p>Баланс: ${user.balance.toFixed(2)}</p>
}