import React from 'react'
import MuiSwitch from '@mui/material/Switch'
import clsx from 'clsx'
import styles from './switch.module.scss'
import type { SwitchProps } from './model/switch-types'
import { defaultSwitchProps } from './model/switch-props'

export const Switch: React.FC<SwitchProps> = (props) => {
    const { className, ...otherProps } = props
    const classes = clsx(styles.switch, className)

    return <MuiSwitch {...defaultSwitchProps} {...otherProps} className={classes} />
}
