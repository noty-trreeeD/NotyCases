import { useAppSelector } from '@/shared'
import { selectUser } from '@/entities/user'

export const UserInfo = () => {
    const user = useAppSelector(selectUser)

    if (!user) return null

    return (
        <div>
            <p>Имя: {user.username}</p>
            <p>ID: {user.id}</p>
        </div>
    )
}