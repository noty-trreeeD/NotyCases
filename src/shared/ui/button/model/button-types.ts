import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import type { ReactNode } from 'react'

export interface ButtonProps extends MuiButtonProps {
    loading?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
}