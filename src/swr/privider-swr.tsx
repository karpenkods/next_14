'use client'
import { FC } from 'react'
import { SWRConfig } from 'swr'

import { ProviderProps } from '@/common'

export const SWRProvider: FC<ProviderProps> = ({ children }) => {
  return <SWRConfig>{children}</SWRConfig>
}
