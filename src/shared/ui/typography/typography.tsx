import React from 'react'
import MuiTypography from '@mui/material/Typography'
import type { TypographyProps } from './model/typography-types'
import { defaultTypographyProps } from './model/typography-props'
import styles from './typography.module.scss'
import clsx from 'clsx'

export const Typography: React.FC<TypographyProps> = ({ className, ...otherProps }) => {
    const classes = clsx(styles.typography, className)
    return (
        <MuiTypography
            {...defaultTypographyProps}
            {...otherProps}
            className={classes}
        />
    )
}
