import type { ToastProps } from './toast-types'

export const defaultToastProps: Partial<ToastProps> = {
    autoHideDuration: 3000,
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
}
