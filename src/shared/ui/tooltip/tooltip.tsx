import React from 'react'
import MuiTooltip from '@mui/material/Tooltip'
import type { TooltipProps } from './model/tooltip-types'
import { defaultTooltipProps } from './model/tooltip-props'
import styles from './tooltip.module.scss'
import clsx from 'clsx'

export const Tooltip: React.FC<TooltipProps> = ({ children, className, ...otherProps }) => {
    const classes = clsx(styles.tooltip, className)
    return (
        <MuiTooltip {...defaultTooltipProps} {...otherProps} classes={{ tooltip: classes }}>
            {children}
        </MuiTooltip>
    )
}
