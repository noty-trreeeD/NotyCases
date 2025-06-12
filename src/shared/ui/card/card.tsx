import React from 'react'
import MuiCard from '@mui/material/Card'
import type { CardProps } from './model/card-types'
import styles from './card.module.scss'
import clsx from 'clsx'

export const Card: React.FC<CardProps> = ({ children, className, ...otherProps }) => {
    const classes = clsx(styles.card, className)
    return (
        <MuiCard className={classes} {...otherProps}>
            {children}
        </MuiCard>
    )
}
