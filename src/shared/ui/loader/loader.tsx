import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import type { LoaderProps } from './model/loader-types'
import styles from './loader.module.scss'
import clsx from 'clsx'

export const Loader: React.FC<LoaderProps> = ({
    size = 24,
    color = 'primary',
    className,
}) => {
    const classes = clsx(styles.loader, className)
    return <CircularProgress size={size} color={color} className={classes} />
}
