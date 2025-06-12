import { useAppSelector, useAppDispatch } from '@/shared'
import { Avatar, Button } from '@/shared'
import { selectUser, clearUserFromStorage, clearUserState } from '@/entities/user'

export const UserPanel = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

    if (!user) return null

    const handleLogout = () => {
        clearUserFromStorage()
        dispatch(clearUserState())
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Avatar src={user.avatarUrl} alt={user.username} />
            <div>
                <p>Имя: {user.username}</p>
                <p>ID: {user.id}</p>
                {'balance' in user && user.balance != null && (
                    <p>Баланс: ${user.balance.toFixed(2)}</p>
                )}
            </div>
            <Button onClick={handleLogout}>Выйти</Button>
        </div>
    )
}
