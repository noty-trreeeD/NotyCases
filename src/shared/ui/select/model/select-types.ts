import type { SelectProps as MuiSelectProps } from '@mui/material/Select'

export interface SelectOption {
    label: string
    value: string | number
}

export interface SelectProps extends MuiSelectProps {
    options: SelectOption[]
    label?: string
}
