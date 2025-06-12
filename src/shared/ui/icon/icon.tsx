import React from 'react'
import type { IconProps } from './model/icon-types'
import styles from './icon.module.scss'
import clsx from 'clsx'

export const Icon: React.FC<IconProps> = ({
    children,
    className,
    size = 24,
    color = 'inherit',
}) => {
    const sizeClass =
        size <= 16
            ? styles.sizeSmall
            : size <= 24
                ? styles.sizeMedium
                : styles.sizeLarge

    const classes = clsx(styles.icon, sizeClass, className)

    return (
        <span className={classes} style={{ color, width: size, height: size }}>
      {children}
    </span>
    )
}
