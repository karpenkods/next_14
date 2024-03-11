'use client'
import { useCallback, useEffect, useRef } from 'react'

export function useFocus(showInput: boolean) {
  const refFocus = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (showInput) refFocus?.current?.focus()
  }, [showInput])

  return refFocus
}

export const useAutoFocus = () => {
  const inputRef = useCallback((inputElement: { focus: () => void }) => {
    if (inputElement) {
      inputElement.focus()
    }
  }, [])

  return inputRef
}
