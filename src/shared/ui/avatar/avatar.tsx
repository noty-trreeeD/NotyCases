import React from 'react'
import MuiAvatar from '@mui/material/Avatar'
import clsx from 'clsx'
import styles from './avatar.module.scss'
import type { AvatarProps } from './model/avatar-types'
import { defaultAvatarProps } from './model/avatar-props'

export const Avatar: React.FC<AvatarProps> = (props) => {
    const { className, ...otherProps } = props
    const classes = clsx(styles.avatar, className)

    return <MuiAvatar {...defaultAvatarProps} {...otherProps} className={classes} />
}
