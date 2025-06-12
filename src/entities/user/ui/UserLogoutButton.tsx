import { Button } from '@/shared'
import { useAppDispatch } from '@/shared'
import { clearUserState, clearUserFromStorage } from '@/entities/user'

export const UserLogoutButton = () => {
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        clearUserFromStorage()
        dispatch(clearUserState())
    }

    return <Button onClick={handleLogout}>Выйти</Button>
}