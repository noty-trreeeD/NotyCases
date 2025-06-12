import React from 'react'
import MuiAlert from '@mui/material/Alert'
import type { AlertProps } from './model/alert-types'
import { defaultAlertProps } from './model/alert-props'
import styles from './alert.module.scss'
import clsx from 'clsx'

export const Alert: React.FC<AlertProps> = ({ className, ...otherProps }) => {
    const classes = clsx(styles.alert, className)

    return (
        <MuiAlert
            {...defaultAlertProps}
            {...otherProps}
            className={classes}
        />
    )
}
