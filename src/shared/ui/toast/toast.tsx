import React from 'react'
import MuiSnackbar from '@mui/material/Snackbar'
import type { ToastProps } from './model/toast-types'
import { defaultToastProps } from './model/toast-props'
import styles from './toast.module.scss'
import clsx from 'clsx'

export const Toast: React.FC<ToastProps> = ({ className, ...otherProps }) => {
    const classes = clsx(styles.toast, className)

    return (
        <MuiSnackbar
            {...defaultToastProps}
            {...otherProps}
            ContentProps={{
                className: classes,
            }}
        />
    )
}
