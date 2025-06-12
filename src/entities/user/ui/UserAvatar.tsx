import { Avatar } from '@/shared'
import { useAppSelector } from '@/shared'
import { selectUser } from '@/entities/user'

export const UserAvatar = () => {
    const user = useAppSelector(selectUser)

    if (!user) return null

    return <Avatar src={user.avatarUrl} alt={user.username} />
}