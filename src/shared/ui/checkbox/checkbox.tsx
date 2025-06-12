import React from 'react'
import MuiCheckbox from '@mui/material/Checkbox'
import type { CheckboxProps } from './model/checkbox-types'
import { defaultCheckboxProps } from './model/checkbox-props'
import styles from './checkbox.module.scss'
import clsx from 'clsx'

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...otherProps }) => {
    const classes = clsx(styles.checkbox, className)
    return <MuiCheckbox className={classes} {...defaultCheckboxProps} {...otherProps} />
}
