import type { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar'

export interface ToastProps extends MuiSnackbarProps {
    message: string
}
