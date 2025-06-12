import React from 'react'
import MuiButton from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import type { ButtonProps } from './model/button-types'
import styles from './button.module.scss'
import clsx from 'clsx'
import { defaultButtonProps } from './model/button-props'

export const Button: React.FC<ButtonProps> = (props) => {
    const { className, loading, startIcon, endIcon, disabled, ...otherProps } = props

    const classes = clsx(styles.button, className)

    const isDisabled = disabled || loading

    return (
        <MuiButton
            {...defaultButtonProps}
            {...otherProps}
            disabled={isDisabled}
            startIcon={loading ? <CircularProgress color="inherit" size={16} /> : startIcon}
            endIcon={loading ? null : endIcon}
            className={classes}
        />
    )
}
