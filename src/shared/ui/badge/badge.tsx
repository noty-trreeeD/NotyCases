import React from 'react'
import MuiBadge from '@mui/material/Badge'
import clsx from 'clsx'
import styles from './badge.module.scss'
import type { BadgeProps } from './model/badge-types'
import { defaultBadgeProps } from './model/badge-props'

export const Badge: React.FC<BadgeProps> = (props) => {
    const { className, ...otherProps } = props
    const classes = clsx(styles.badge, className)

    return <MuiBadge {...defaultBadgeProps} {...otherProps} className={classes} />
}
