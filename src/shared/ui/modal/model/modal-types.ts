import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog'
import type { ReactNode } from 'react'

export interface ModalProps extends MuiDialogProps {
    children: ReactNode
    onClose: () => void
    open: boolean
}
