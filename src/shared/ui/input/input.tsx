import React from 'react'
import MuiTextField from '@mui/material/TextField'
import type { InputProps } from './model/input-types'
import { defaultInputProps } from './model/input-props'
import styles from './input.module.scss'
import clsx from 'clsx'

export const Input: React.FC<InputProps> = ({ className, ...otherProps }) => {
    const classes = clsx(styles.input, className)
    return <MuiTextField className={classes} {...defaultInputProps} {...otherProps} />
}
