import { ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
}

export interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export interface INotificationProps {
  message: string
  title?: string
  loading?: boolean
}
