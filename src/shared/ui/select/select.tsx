import React from 'react'
import MuiSelect from '@mui/material/Select'
import MuiMenuItem from '@mui/material/MenuItem'
import MuiInputLabel from '@mui/material/InputLabel'
import MuiFormControl from '@mui/material/FormControl'
import type { SelectProps } from './model/select-types'
import { defaultSelectProps } from './model/select-props'
import styles from './select.module.scss'
import clsx from 'clsx'

export const Select: React.FC<SelectProps> = ({
    options,
    label,
    className,
    value,
    onChange,
    ...otherProps
}) => {
    const classes = clsx(styles.select, className)

    return (
        <MuiFormControl className={classes} {...defaultSelectProps}>
            {label && <MuiInputLabel>{label}</MuiInputLabel>}
            <MuiSelect value={value} onChange={onChange} label={label} {...otherProps}>
                {options.map((option) => (
                    <MuiMenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MuiMenuItem>
                ))}
            </MuiSelect>
        </MuiFormControl>
    )
}
