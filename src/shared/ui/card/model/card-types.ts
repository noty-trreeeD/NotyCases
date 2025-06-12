import type { ReactNode } from 'react'
import type { CardProps as MuiCardProps } from '@mui/material/Card'

export interface CardProps extends MuiCardProps {
    children: ReactNode
    className?: string
}
