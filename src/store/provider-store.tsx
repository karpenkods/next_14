'use client'
import React, { FC, useRef } from 'react'
import { Provider } from 'react-redux'

import { ProviderProps } from '@/common'
import { AppStore, makeStore } from './store'

export const ProviderStore: FC<ProviderProps> = ({ children }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
