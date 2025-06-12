import React from 'react'
import MuiDialog from '@mui/material/Dialog'
import MuiDialogContent from '@mui/material/DialogContent'
import type { ModalProps } from './model/modal-types'
import styles from './modal.module.scss'
import clsx from 'clsx'

export const Modal: React.FC<ModalProps> = ({ children, className, ...props }) => {
    const classes = clsx(styles.modalContent, className)

    return (
        <MuiDialog {...props}>
            <MuiDialogContent className={classes}>{children}</MuiDialogContent>
        </MuiDialog>
    )
}
