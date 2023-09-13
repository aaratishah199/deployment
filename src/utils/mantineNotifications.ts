import { notifications } from '@mantine/notifications'
import theme from 'constants/theme'

interface ToastType {
  title: string
  message: string
  type: 'success' | 'error' | 'warning'
}

const color = {
  success: theme.colors.emerald,
  warning: theme.colors.yellow,
  error: theme.colors.red,
}

const sxStyles = {
  success: {
    backgroundColor: theme.colors.emerald[0],
    borderTop: `4px solid ${theme.colors.emerald[5]} `,
    boxShadow: `0px 16px 32px 0px rgba(4, 120, 87, 0.08), 0px 10px 16px 0px rgba(4, 120, 87, 0.08), 0px 4px 8px 0px rgba(4, 120, 87, 0.06)`,
  },
  warning: {
    backgroundColor: theme.colors.yellow[0],
    borderTop: `4px solid ${theme.colors.yellow[5]} `,
    boxShadow: `0px 16px 32px 0px rgba(161, 98, 7, 0.08), 0px 10px 16px 0px rgba(161, 98, 7, 0.08), 0px 4px 8px 0px rgba(161, 98, 7, 0.06)`,
  },
  error: {
    backgroundColor: theme.colors.red[0],
    borderTop: `4px solid ${theme.colors.red[5]} `,
    boxShadow: `0px 16px 32px 0px rgba(185, 28, 28, 0.08), 0px 10px 16px 0px rgba(185, 28, 28, 0.08), 0px 4px 8px 0px rgba(185, 28, 28, 0.06)`,
  },
}

export const toast = ({ title, message, type }: ToastType) => {
  return notifications.show({
    title,
    message,

    styles: {
      closeButton: {
        color: color[type][5],
      },
      title: {
        color: color[type][8],
        fontSize: theme.fontSizes.lg,
        fontWeight: 'bold',
        textTransform: 'capitalize',
      },
      description: {
        color: color[type][6],
        fontSize: theme.fontSizes.md,
      },
    },
    sx: {
      '::before': {
        display: 'none',
      },

      ...sxStyles[type],
    },
  })
}
