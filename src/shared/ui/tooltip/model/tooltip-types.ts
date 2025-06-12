import type { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip'
import type { ReactElement } from 'react'

export interface TooltipProps extends MuiTooltipProps {
    children: ReactElement
}
